import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsListComponent } from './operators-list/operators-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OperatorComponent } from './operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    OperatorsListComponent,
    OperatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
