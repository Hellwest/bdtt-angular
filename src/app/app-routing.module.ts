import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorComponent } from './operator/operator.component';
import { OperatorsListComponent } from './operators-list/operators-list.component';

const routes: Routes = [
  { path: "", redirectTo: "operators", pathMatch: "full" },
  { path: "operators", component: OperatorsListComponent },
  { path: "operator", component: OperatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
