import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Medecin } from "../../../../common/interfaces/medecin";
import { CommunicationService } from "../services/communication.service";

@Component({
  selector: 'app-app.insert-page',
  templateUrl: './app.insert-page.component.html',
  styleUrls: ['./app.insert-page.component.css']
})
export class AppInsertPageComponent implements OnInit {
  public route: string;
  public medecins: Medecin[];
  medecin: Medecin = {
    idmedecin: -1,
    prenom: '',
    nom: '',
    specialite: '',
    anneesexperience: 0,
    idservice: 0
  };

  public constructor(location: Location, router: Router,  public communicationService: CommunicationService, public activatedRoute: ActivatedRoute,) {
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
          }
        });
  }

  public readonly title: string = "INF3710 TP4";
  public ngOnInit(): void { }

  ajouterMedecin() {
    this.communicationService.insertMedecin(this.medecin);
  }
}
