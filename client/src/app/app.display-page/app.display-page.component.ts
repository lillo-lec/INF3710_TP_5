import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommunicationService } from "../services/communication.service";
import { Medecin } from "../../../../common/interfaces/medecin";

@Component({
  selector: 'app-app.display-page',
  templateUrl: './app.display-page.component.html',
  styleUrls: ['./app.display-page.component.css']
})
export class AppDisplayPageComponent implements OnInit {
  public route: string;
  public medecins: Medecin[] = [
    {
      idmedecin: 0,
      prenom: "wrong",
      nom: "wrong",
      specialite: "wrong",
      anneesexperience: 0,
      idservice: 0
    },
    {
      idmedecin: 0,
      prenom: "wrong",
      nom: "wrong",
      specialite: "wrong",
      anneesexperience: 6,
      idservice: 0
    }
  ];
  public readonly title: string = "Accueil";

  public constructor(public location: Location, public router: Router, public communicationService: CommunicationService) {
  }

  public ngOnInit(): void {
    this.router.events.subscribe((_val: any) => {
      if (this.location.path() !== "") {
        this.route = this.location.path();
      } else {
        this.route = "";
      }
  });
  this.communicationService.getAllMedecin().subscribe((medecins: any) => {
    if (medecins) {
      this.medecins = medecins.rows;
    }
  });
  }
}