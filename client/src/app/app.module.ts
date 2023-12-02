import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDisplayPageComponent } from "./app.display-page/app.display-page.component";
import { AppDeletePageComponent } from "./app.delete-page/app.delete-page.component";
import { AppInsertPageComponent } from "./app.insert-page/app.insert-page.component";
import { AppModifyPageComponent } from "./app.modify-page/app.modify-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AppDisplayPageComponent,
    AppDeletePageComponent,
    AppInsertPageComponent,
    AppModifyPageComponent
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
