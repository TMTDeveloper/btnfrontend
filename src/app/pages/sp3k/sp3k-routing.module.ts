import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sp3kComponent } from './sp3k.component';
import { Sp3kTableComponent } from './sp3k-table/sp3k-table.component';

const routes: Routes = [{
  path: '',
  component: Sp3kComponent,
  children: [{
    path: 'sp3k',
    component: Sp3kTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sp3kRoutingModule { }

export const routedComponents = [
  Sp3kTableComponent,
  Sp3kComponent,
];
