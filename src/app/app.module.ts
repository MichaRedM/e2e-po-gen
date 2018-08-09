import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { E2eIdDirective } from './e2e-id.directive';
import { GetE2EpageObjComponent } from './get-e2-epage-obj/get-e2-epage-obj.component';
import { E2eIdCollectorService } from './e2e-id-collector.service';


@NgModule({
  declarations: [
    AppComponent,
    E2eIdDirective,
    GetE2EpageObjComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    E2eIdCollectorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
