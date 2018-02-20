import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Sp3kTableService } from '../../../@core/data/sp3k-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './sp3k-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class Sp3kTableComponent {

  settings = {
    actions:{
    add:false,
    edit:false,
    delete:false
    },
    columns: {
      customerId: {
        title: 'CUSTOMER_ID',
        type: 'number',
      },
      kodeCabang: {
        title: 'KODE_CABANG',
        type: 'string',
      },
      cabang: {
        title: 'CABANG',
        type: 'string',
      },
      kanwil: {
        title: 'KANWIL',
        type: 'string',
      },
      noAplikasi: {
        title: 'NO_APLIKASI',
        type: 'string',
      },
      namaDebitur: {
        title: 'NAMA_DEBITUR',
        type: 'string',
      },
      gender: {
        title: 'GENDER',
        type: 'string',
      },
      alamatDebitur: {
        title: 'ALAMAT_DEBITUR',
        type: 'string',
      },
      alamatAgunan: {
        title: 'ALAMAT_AGUNAN',
        type: 'string',
      },
      tanggalLahir: {
        title: 'TANGGAL_LAHIR',
        type: 'number',
      },
      usia: {
        title: 'USIA',
        type: 'number',
      },
      sp3kDate: {
        title: 'SP3k_DATE',
        type: 'number',
      },
      jangkaWaktu: {
        title: 'JANGKA_WAKTU',
        type: 'number',
      },
      jenisKredit: {
        title: 'JENIS_KREDIT',
        type: 'string',
      },
      plafondKredit: {
        title: 'PLAFOND_KREDIT',
        type: 'string',
      },
      hargaBangunan: {
        title: 'HARGA_BANGUNAN',
        type: 'number',
      },
      pekerjaan: {
        title: 'PEKERJAAN',
        type: 'string',
      },
      asuransiJiwa: {
        title: 'ASURANSI_JIWA',
        type: 'number',
      },
      asuransiFire: {
        title: 'ASURANSI_FIRE',
        type: 'number',
      },
      asuransiKredit: {
        title: 'ASURANSI_KREDIT',
        type: 'number',
      },
      dateTimeCreate: {
        title: 'DATE_TIME_CREATE',
        type: 'date-time',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: Sp3kTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
