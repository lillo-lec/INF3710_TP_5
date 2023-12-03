import { Location } from "@angular/common";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { CommunicationService } from "../services/communication.service";
import { Medecin } from "../../../../common/interfaces/medecin";

@Component({
  selector: 'app-app.modify-page',
  templateUrl: './app.modify-page.component.html',
  styleUrls: ['./app.modify-page.component.css']
})
export class AppModifyPageComponent implements OnInit, OnDestroy {
  public route: string;
  public medecin: Medecin = {
    idmedecin: 0,
    prenom: "",
    nom: "",
    specialite: "",
    anneesexperience: 0,
    idservice: 0,
  };
  public medecinIndex: number = 0;


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
    
    this.communicationService.getAllMedecin().subscribe((medecins: any) => {
      if (medecins) {
        let i: number = 0;
        for (i = 0; i < medecins.rows.length; i++) {
          if (this.communicationService.medecinId === medecins.rows[i].idmedecin) {
            this.medecinIndex = i;
          }
        }
        this.medecin = medecins.rows[this.medecinIndex];
      }
    });
  }

  modifyMedecin() {
    this.communicationService.modifyMedecin(this.medecin).subscribe(() => {});
  }
}
