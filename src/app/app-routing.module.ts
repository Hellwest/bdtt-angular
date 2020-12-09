import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorComponent } from './operator/operator.component';
import { OperatorsListComponent } from './operators-list/operators-list.component';

const routes: Routes = [
  { path: "", component: OperatorsListComponent },
  { path: "operator/:operatorId", component: OperatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
