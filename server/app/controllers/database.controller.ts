import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";
// import { Medecin } from "../../../common/medecin";
// import { StatusCodes } from "http-status-codes";
// import { Request, Response } from 'express';

@injectable()
export class DatabaseController {
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly dataBaseService: DatabaseService
  ) {
    // this.initializeRoutes();
  }

  public get router(): Router {
    const router: Router = Router();
    return router;
  }

  // private initializeRoutes() {
  //     // this.router.get('/', async (_req: Request, res: Response) => {
  //     //   const listeMedecins: Medecin[] = [
  //     //     {
  //     //       idMedecin: 3,
  //     //       prenom: "Bob",
  //     //       nom: "Johnson",
  //     //       specialite: "Orthopédiste",
  //     //       anneesExperience: 10,
  //     //       idService: 103
  //     //     },
  //     //     {
  //     //       idMedecin: 4,
  //     //       prenom: "Alice",
  //     //       nom: "Williams",
  //     //       specialite: "Dermatologue",
  //     //       anneesExperience: 6,
  //     //       idService: 104
  //     //     }
  //     //   ];
  //     // res.status(StatusCodes.OK).json(listeMedecins);
  // });

  //   this.router.get('/display', async (req: Request, res: Response) => {
  //     const medecins = await this.dataBaseService.getAllMedecin();
  //     res.status(StatusCodes.OK).json(medecins);
  // });

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

    
  //   this.router.delete('/delete/:idMedecin', async (req: Request, res: Response) => {
  //     const idMedecin = Number(req.params.idMedecin);
  //     await this.dataBaseService.deleteMedecin(idMedecin);
  //     res.status(StatusCodes.ACCEPTED).send();
  // });
  // }

}

  // TODO: get, post, delete...
  // TODO: à travers de nodejs.json on partage les fonctions avec le client.
