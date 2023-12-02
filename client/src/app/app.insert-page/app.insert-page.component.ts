import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medecin } from "../../../../common/interfaces/medecin";

@Component({
  selector: 'app-app.insert-page',
  templateUrl: './app.insert-page.component.html',
  styleUrls: ['./app.insert-page.component.css']
})
export class AppInsertPageComponent implements OnInit {
  public route: string;
  medecin: Medecin = {
    idMedecin: 0,
    prenom: '',
    nom: '',
    specialite: '',
    anneesExperience: 0,
    idService: 0
  };

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
