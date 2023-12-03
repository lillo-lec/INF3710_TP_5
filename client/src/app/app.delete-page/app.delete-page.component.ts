import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medecin } from "../../../../common/interfaces/medecin";
import { CommunicationService } from "../services/communication.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app.delete-page',
  templateUrl: './app.delete-page.component.html',
  styleUrls: ['./app.delete-page.component.css']
})
export class AppDeletePageComponent implements OnInit, OnDestroy {
  public route: string;
  public medecins: Medecin[];
  public medecin: Medecin = {
    idmedecin: 0,
    prenom: "",
    nom: "",
    specialite: "",
    anneesexperience: 0,
    idservice: 0
  }
  public medecinId: number;
  public medecinIndex: number;

  public constructor(public location: Location, public router: Router, public communicationService: CommunicationService, public activatedRoute: ActivatedRoute,) {
  }

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

    this.medecinId = this.communicationService.medecinId;

    this.communicationService.getAllMedecin().subscribe((medecins: any) => {
      if (medecins) {
        this.medecins = medecins.rows;
        for (let medecin of this.medecins) {
          if (this.medecinId === medecin.idmedecin) {
            this.medecin = medecin;
          }
        }
      }
    });
  }

  supprimerMedecin() {
    if (this.communicationService.medecinId !== -1)
      this.communicationService.deleteMedecin(this.medecinId).subscribe(() => {});
  }

}
