import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { Sp3kRoutingModule, routedComponents } from './sp3k-routing.module';
import { Sp3kTableService } from '../../@core/data/sp3k-table.service';

@NgModule({
  imports: [
    ThemeModule,
    Sp3kRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    Sp3kTableService,
  ],
})
export class Sp3kModule { }
