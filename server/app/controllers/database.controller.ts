import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { injectable, inject } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  public router: Router;
  public constructor(
    @inject(Types.DatabaseService) private readonly dataBaseService: DatabaseService
  ) {
    this.router = Router();

  this.router.get('/display', async (req: Request, res: Response) => {
    const medecins = await this.dataBaseService.getAllMedecin();
    res.status(StatusCodes.OK).json(medecins);
  });

  this.router.delete('/delete/:idMedecin', async (req: Request, res: Response) => {
    try {
      const idMedecin = Number(req.params.idMedecin);
      await this.dataBaseService.deleteMedecin(idMedecin);
      res.status(StatusCodes.OK).send();
  } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Erreur de suppression!" });
  }
});

this.router.post('/insert', async (req: Request, res: Response) => {
  try {
    const medecin = req.body;
    const result = await this.dataBaseService.addMedecin(medecin);
    res.status(StatusCodes.CREATED).json(result.rows);
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Erreur d'insertion!" });
}
});

this.router.put('/modify/:idMedecin', async (req: Request, res: Response) => {
  try {
    const medecin = req.body;
    const result = await this.dataBaseService.modifyMedecin(medecin);
    res.status(StatusCodes.OK).json(result.rows);
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Erreur de modification!" });
}
});

  

}
}