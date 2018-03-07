import {
  Component
} from '@angular/core';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import {
  BackendService
} from '../../@core/data/backend.service';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {
  Observable
} from 'rxjs/Rx';
import {
  NgProgress
} from 'ngx-progressbar';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss'],

})
export class GetDataComponent {

  equals = (one: NgbDateStruct, two: NgbDateStruct) =>
    one && two && two.year === one.year && two.month === one.month && two.day === one.day;

  before = (one: NgbDateStruct, two: NgbDateStruct) =>
    !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ?
    false : one.day < two.day : one.month < two.month : one.year < two.year;

  after = (one: NgbDateStruct, two: NgbDateStruct) =>
    !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ?
    false : one.day > two.day : one.month > two.month : one.year > two.year;

  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  today: string;
  onProcess: boolean;
  activeModal: NgbModalRef;

  dateFrom: string;
  dateTo: string;

  constructor(private modalService: NgbModal, calendar: NgbCalendar, public service: BackendService, public ngProgress: NgProgress) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getToday();
    this.today = calendar.getToday().toString();

    this.dateFrom = moment(calendar.getToday().toString(), 'YYYY-M-D').format('YYYY-MM-DD');
    this.dateTo = moment(calendar.getToday().toString(), 'YYYY-M-D').format('YYYY-MM-DD');



    console.log(this.dateFrom);
    console.log(this.dateTo);

  }

  showStaticModal() {
    this.activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });
    this.activeModal.componentInstance.modalHeader = 'Notification';
    this.activeModal.componentInstance.modalContent = `Please Wait While Data is Being Processed!`;
  }


  getData(type) {
    this.ngProgress.start();
    this.showStaticModal();
    this.onProcess = true;
    const params = {
      datefrom: moment(this.dateFrom).format('YYYYMMDD'),
      dateTo: moment(this.dateTo).format('YYYYMMDD')
    };
    let query = "";
    for (const key in Object.keys(params)) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
    this.service.postreq(type, query).subscribe((response) => {
      console.log(response)
      this.ngProgress.done();
      this.onProcess = false;
      this.activeModal.componentInstance.closeModal();
     }, (error) => {
        this.ngProgress.done();
        this.onProcess = false;
        console.log(error);
        
      this.activeModal.componentInstance.closeModal();
      }
    )
  }

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && this.after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && this.after(date, this.fromDate) && this.before(date, this.hoveredDate);
  isInside = date => this.after(date, this.fromDate) && this.before(date, this.toDate);
  isFrom = date => this.equals(date, this.fromDate);
  isTo = date => this.equals(date, this.toDate);

}

import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalContent }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">OK</button>
    </div>
  `,
})
export class ModalComponent {

  modalHeader: string;
  modalContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}
