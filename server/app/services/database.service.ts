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
    port: 5433,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
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
    const query = 'INSERT INTO Medecins VALUES($1, $2, $3, $4, $5, $6)';
    const values = [medecin.idMedecin, medecin.prenom, medecin.nom, medecin.specialite, medecin.anneesExperience, medecin.idService];
    const res = await client.query(query, values);
    client.release()
    return res;
  }

  public async modifyMedecin(medecin: Medecin): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `UPTATE Medecins
                   SET prenom = $1, nom = $2, specialite = $3, anneesExperience = $4, idService = $5 
                   WHERE idMedecin= $6`;
    const values = [medecin.prenom, medecin.nom, medecin.specialite, medecin.anneesExperience, medecin.idService, medecin.idMedecin];
    const res = await client.query(query, values);
    client.release()
    return res;
  }

  public async deleteMedecin(idMedecin: number): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `DELETE FROM Medecins WHERE idMedecin='${idMedecin}'`;
    const res = await client.query(query);
    client.release()
    return res;
  }
}
