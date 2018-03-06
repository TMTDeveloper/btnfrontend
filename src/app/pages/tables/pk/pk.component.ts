import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import {BackendService} from '../../../@core/data/backend.service'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './pk.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
 
    }
  `],
})
export class PKComponent {

  settings = {
  actions:{
    add:false,
    edit:false,
    delete:false
  },
  pager:{
    display: false,
    perPage:30
  },
    columns: {
      CUSTOMER_ID: {
        title: 'CUSTOMER_ID',
        type: 'number',
      },
      KODE_CABANG: {
        title: 'KODE_CABANG',
        type: 'string',
      },
      CABANG: {
        title: 'CABANG',
        type: 'string',
      },
      KANWIL: {
        title: 'KANWIL',
        type: 'string',
      },
      NO_APLIKASI: {
        title: 'NO_APLIKASI',
        type: 'string',
      },
      NAMA_DEBITUR: {
        title: 'NAMA_DEBITUR',
        type: 'string',
      },
      GENDER: {
        title: 'GENDER',
        type: 'string',
      },
      ALAMAT_DEBITUR: {
        title: 'ALAMAT_DEBITUR',
        type: 'string',
      },
      ALAMAT_AGUNAN: {
        title: 'ALAMAT_AGUNAN',
        type: 'string',
      },
      TANGGAL_LAHIR: {
        title: 'TANGGAL_LAHIR',
        type: 'number',
      },
      USIA: {
        title: 'USIA',
        type: 'number',
      },
      PK_DATE: {
        title: 'PK_DATE',
        type: 'number',
      },
      JANGKA_WAKTU: {
        title: 'JANGKA_WAKTU',
        type: 'number',
      },
      JENIS_KREDIT: {
        title: 'JENIS_KREDIT',
        type: 'string',
      },
      PLAFOND_KREDIT: {
        title: 'PLAFOND_KREDIT',
        type: 'string',
      },
      HARGA_BANGUNAN: {
        title: 'HARGA_BANGUNAN',
        type: 'number',
      },
      PEKERJAAN: {
        title: 'PEKERJAAN',
        type: 'string',
      },
      ASURANSI_JIWA: {
        title: 'ASURANSI_JIWA',
        type: 'number',
      },
      ASURANSI_FIRE: {
        title: 'ASURANSI_FIRE',
        type: 'number',
      },
      ASURANSI_KREDIT: {
        title: 'ASURANSI_KREDIT',
        type: 'number',
      },
      DATE_TIME_CREATE: {
        title: 'DATE_TIME_CREATE',
        type: 'date-time',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BackendService) {
   this.loadData();
  }


  loadData(){
    this.service.getreq("MST_CUSTOMER_PKs/all").subscribe((response)=>{
      const data = response.data;
      this.source.load(data);
      (error) => {
        console.log(error);
      }
    })
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  searchRange(beginDate, endDate){
    if (!(!beginDate && !endDate)){
      this.source.setFilter([
     {
       field:'dateTimeCreate',
       search:'endDate',
       filter: (value: string, endValue: string)=>{
         return new Date (value) >= new Date (endValue);
       }
      }
    ], true).setFilter([
      {
        field:'dateTimeCreate',
        search:'beginDate',
        filter: (value: string, beginValue: string)=>{
          return new Date (value) >= new Date (beginValue);
        }
      }
    ]);
    } else {
      return this.source;
    }    
  }
}
