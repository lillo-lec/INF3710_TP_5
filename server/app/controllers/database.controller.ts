import { Router,Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
//import express = require("express");
import { injectable } from "inversify";
// import { DatabaseService } from "../services/database.service";
// import Types from "../types";
// import { Medecin } from "../../../common/medecin";

@injectable()
export class DatabaseController {
  public router: Router;
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    // @inject(Types.DatabaseService) private readonly dataBaseService: DatabaseService
  ) {
    this.router = Router();

    
    // À Commenter pour tester avec base de données 
    this.router.get('/display', async (_req: Request, res: Response) => {
      console.log("test")
      const listeMedecins = [
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
        }
      ];
    res.json(listeMedecins);
});

    // À Décommenter pour tester avec base de données 
//   this.router.get('/display', async (req: Request, res: Response) => {
//     const medecins = await this.dataBaseService.getAllMedecin();
//     res.status(StatusCodes.OK).json(medecins);
// });

  this.router.delete('/delete/:idMedecin', async (req: Request, res: Response) => {
    const idMedecin = Number(req.params.idMedecin);
    // À Décommenter pour tester avec base de données 
    // await this.dataBaseService.deleteMedecin(idMedecin);
    console.log("test reception:" + idMedecin);
    res.status(StatusCodes.OK).send();
});

    // À tester plus tard:

// this.router.post('/insert', async (req: Request, res: Response) => {
//     const medecin = req.body;
//     this.dataBaseService.addMedecin(medecin);
//     res.status(StatusCodes.CREATED);
// });


//   this.router.put('/modify', async (req: Request, res: Response) => {
//     const medecin = req.body;
//     const message = await this.dataBaseService.modifyMedecin(medecin);
//     res.status(StatusCodes.CREATED).json(message);
//   });

  

}
}