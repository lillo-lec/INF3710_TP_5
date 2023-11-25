import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-app.delete-page',
  templateUrl: './app.delete-page.component.html',
  styleUrls: ['./app.delete-page.component.css']
})
export class AppDeletePageComponent implements OnInit {
  public route: string;

  public constructor(location: Location, router: Router) {
      router.events.subscribe((_val: any) => {
          if (location.path() !== "") {
            this.route = location.path();
          } else {
            this.route = "";
          }
        });
  }

  public readonly title: string = "INF3710 TP4";
  public ngOnInit(): void { }
}
