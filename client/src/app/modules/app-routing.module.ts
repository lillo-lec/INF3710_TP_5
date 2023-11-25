import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { AppDisplayPageComponent } from "../app.display-page/app.display-page.component";
import { AppInsertPageComponent } from "../app.insert-page/app.insert-page.component";
import { AppModifyPageComponent } from "../app.modify-page/app.modify-page.component";
import { AppDeletePageComponent } from "../app.delete-page/app.delete-page.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "display", component: AppDisplayPageComponent },
  { path: "insert", component: AppInsertPageComponent },
  { path: "modify", component: AppModifyPageComponent },
  { path: "delete", component: AppDeletePageComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
