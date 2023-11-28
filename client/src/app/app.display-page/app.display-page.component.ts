import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommunicationService } from "../services/communication.service";
import { Medecin } from "../../../../common/medecin";

@Component({
  selector: 'app-app.display-page',
  templateUrl: './app.display-page.component.html',
  styleUrls: ['./app.display-page.component.css']
})
export class AppDisplayPageComponent implements OnInit {
  public route: string;
  public medecins: Medecin[];

  public constructor(location: Location, router: Router, public communicationService: CommunicationService) {
      router.events.subscribe((_val: any) => {
          if (location.path() !== "") {
            this.route = location.path();
          } else {
            this.route = "";
          }
      });
    
      // this.communicationService.getAllMedecin().subscribe((medecins) => {
      //   if (medecins) {
      //     this.medecins = medecins;
      //   }
      // });
  }

  public readonly title: string = "INF3710 TP4";
  public ngOnInit(): void {
    this.medecins = [
    {
      idMedecin: 3,
      prenom: "Bob",
      nom: "Johnson",
      specialite: "Orthopédiste",
      anneesExperience: 10,
      idService: 103
    },
    {
      idMedecin: 4,
      prenom: "Alice",
      nom: "Williams",
      specialite: "Dermatologue",
      anneesExperience: 6,
      idService: 104
    }];
  }

}
