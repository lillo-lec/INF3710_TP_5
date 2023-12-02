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
      idMedecin: 0,
      prenom: "wrong",
      nom: "wrong",
      specialite: "wrong",
      anneesExperience: 0,
      idService: 0
    },
    {
      idMedecin: 0,
      prenom: "wrong",
      nom: "wrong",
      specialite: "wrong",
      anneesExperience: 6,
      idService: 0
    }
  ];;

  public constructor(location: Location, router: Router, public communicationService: CommunicationService) {
      router.events.subscribe((_val: any) => {
          if (location.path() !== "") {
            this.route = location.path();
          } else {
            this.route = "";
          }
      });
      this.communicationService.getAllMedecin().subscribe((medecins) => {
        if (medecins) {
          console.log(medecins);
          this.medecins = medecins;
          console.log(this.medecins);
        }
      });
  }

  public readonly title: string = "Accueil";
  public ngOnInit(): void {}
}