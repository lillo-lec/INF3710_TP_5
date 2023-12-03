import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { Medecin } from "../interfaces/medecin";

@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "hopital_bd",
    password: "postgres2001",
    port: 5433,      
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getAllMedecin(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query("SELECT * FROM Medecins;");
    client.release()
    return res;
  }

  public async addMedecin(medecin: Medecin): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `INSERT INTO Medecins(idMedecin, prenom, nom, specialite, anneesExperience, idService)
                   VALUES(${medecin.idmedecin}, '${medecin.prenom}', '${medecin.nom}', '${medecin.specialite}', ${medecin.anneesexperience}, ${medecin.idservice})`;
    const res = await client.query(query);
    client.release()
    return res;
  }

  public async modifyMedecin(medecin: Medecin): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `UPDATE Medecins
                   SET prenom = '${medecin.prenom}', nom = '${medecin.nom}', specialite = '${medecin.specialite}', anneesExperience = ${medecin.anneesexperience}, idService = ${medecin.idservice} 
                   WHERE idMedecin=${medecin.idmedecin}`;
    const res = await client.query(query);
    client.release()
    return res;
  }

  public async deleteMedecin(idMedecin: number): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `DELETE FROM Medecins WHERE idMedecin=${idMedecin}`;
    const res = await client.query(query);
    client.release()
    return res;
  }
}
