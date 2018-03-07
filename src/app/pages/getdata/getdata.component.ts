import { Component } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {BackendService} from '../../@core/data/backend.service';
import * as moment from 'moment';


@Component({
  selector: 'ngx-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss'],
  
})
export class GetDataComponent {

  equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

 before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  today: string;
  onProcess: boolean;

  dateFrom :string;
dateTo:string;

  constructor(calendar: NgbCalendar,private service: BackendService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getToday();
    this.today = calendar.getToday().toString();

    this.dateFrom = moment(calendar.getToday().toString(),'YYYY-M-D').format('YYYY-MM-DD');
    this.dateTo = moment(calendar.getToday().toString(),'YYYY-M-D').format('YYYY-MM-DD');
    
    

  console.log(this.dateFrom);
  console.log(this.dateTo);
   
  }


  getData(type){
    this.onProcess=true;
    const data={
      datefrom: moment(this.dateFrom).format('YYYYMMDD'),
      dateTo : moment(this.dateTo).format('YYYYMMDD')
    };
    this.service.postreq(type,data).subscribe((response)=>{
      this.onProcess=false;
      (error) => {
        this.onProcess=false;
        console.log(error);
      }
    })
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
