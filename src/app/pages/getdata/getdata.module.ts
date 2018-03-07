import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { GetDataRoutingModule, routedComponents } from './getdata-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {BackendService} from '../../@core/data/backend.service';
import { NgProgressModule } from 'ngx-progressbar';
import {ModalComponent} from './getdata.component';

@NgModule({
  imports: [
    ThemeModule,
    GetDataRoutingModule,NgProgressModule
  ],
  declarations: [
    ...routedComponents ,ModalComponent
  ],
  providers: [BackendService
  ],entryComponents: [
    ModalComponent,
  ],
})
export class GetDataModule { }
