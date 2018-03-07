import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { PKComponent } from './pk/pk.component';
import {SP3KComponent} from './sp3k/sp3k.component';
const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'pk',
    component: PKComponent,
  },
  {
    path: 'sp3k',
    component: SP3KComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  PKComponent,
  SP3KComponent
];
