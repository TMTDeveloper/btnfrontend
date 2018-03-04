import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDataComponent } from './getdata.component';

const routes: Routes = [{
  path: '',
  component: GetDataComponent,
 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetDataRoutingModule { }

export const routedComponents = [
  GetDataComponent
];
