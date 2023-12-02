import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medecin } from "../../../../common/interfaces/medecin";
import { CommunicationService } from "../services/communication.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app.delete-page',
  templateUrl: './app.delete-page.component.html',
  styleUrls: ['./app.delete-page.component.css']
})
export class AppDeletePageComponent implements OnInit {
  public route: string;
  public medecins: Medecin[];
  public medecinId: number;
  public medecinIndex: number;

  public constructor(location: Location, router: Router, public communicationService: CommunicationService, public activatedRoute: ActivatedRoute,) {
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

            this.activatedRoute.params.subscribe((params) => {
              this.medecinId = Number(params['id']);
              console.log("ID :"+ this.medecinId);
            });

                if(!(this.medecinId === -1)) {
        
                console.log("ds FOR");
                  for (let i = 0; i < this.medecins.length; i++) {
                    if (this.medecinId == this.medecins[i].idMedecin) {
                      this.medecinIndex = i;
                    }
                  }
                }
              
              console.log(this.medecinIndex);
          }
        });
        

  }

  public readonly title: string = "INF3710 TP4";

  public ngOnInit(): void {}

  supprimerMedecin(){
    if (!(this.medecinId === -1) && this.medecins) {
      this.communicationService.deleteMedecin(this.medecinId).subscribe(() => {});
    }
  }

}
