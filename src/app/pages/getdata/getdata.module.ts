import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { GetDataRoutingModule, routedComponents } from './getdata-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    ThemeModule,
    GetDataRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class GetDataModule { }
