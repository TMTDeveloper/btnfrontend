import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { GetDataRoutingModule, routedComponents } from './getdata-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {BackendService} from '../../@core/data/backend.service';

@NgModule({
  imports: [
    ThemeModule,
    GetDataRoutingModule,
  ],
  declarations: [
    ...routedComponents ,
  ],
  providers: [BackendService
  ],
})
export class GetDataModule { }
