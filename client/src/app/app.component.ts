import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommunicationService } from "./services/communication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    public route: string;

    public constructor(public location: Location, public router: Router, public communicationService: CommunicationService) {
    }

    public readonly title: string = "INF3710 TP4";
    public ngOnInit(): void {
      this.router.events.subscribe((_val: any) => {
        if (this.location.path() !== "") {
          this.route = this.location.path();
        } else {
          this.route = "";
        }
      });
    }
}
