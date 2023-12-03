import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medecin } from "../../../../common/interfaces/medecin";
import { CommunicationService } from "../services/communication.service";

@Component({
  selector: 'app-app.insert-page',
  templateUrl: './app.insert-page.component.html',
  styleUrls: ['./app.insert-page.component.css']
})
export class AppInsertPageComponent implements OnInit, OnDestroy {
  public route: string;
  public medecin: Medecin = {
    idmedecin: 0,
    prenom: "",
    nom: "",
    specialite: "",
    anneesexperience: 0,
    idservice: 0
  };
  public medecinId: number = 0;
  public idService: string = '';

  public constructor(public location: Location, public router: Router, public communicationService: CommunicationService) {}

  public readonly title: string = "INF3710 TP4";

  public ngOnDestroy(): void {
    this.communicationService.medecinId = -1;
  }

  public ngOnInit(): void {
    this.router.events.subscribe((_val: any) => {
      if (this.location.path() !== "") {
        this.route = this.location.path();
      } else {
        this.route = "";
      }
    });

    console.log(this.medecinId);

    this.communicationService.getAllMedecin().subscribe((medecins: any) => {
      if (medecins) {
        let i: number = 0;
        for (i = 0; i < medecins.rows.length; i++) {
          if (this.medecinId < medecins.rows[i].idmedecin) {
            this.medecinId = medecins.rows[i].idmedecin;
          }
        }
        this.medecin.idmedecin = this.medecinId + 1;
      }
    });
  }

  insertMedecin() {
    this.medecin.idservice = parseInt(this.idService[0]);
    this.communicationService.insertMedecin(this.medecin).subscribe(() => {});
  }

  validateIdService() {
    if (!(this.medecin.idservice >= 0 && this.medecin.idservice <= 9) ||
    this.medecin.idservice === null ||
    this.medecin.idservice === undefined) {
      this.medecin.idservice = 0;
    }
  }
}
