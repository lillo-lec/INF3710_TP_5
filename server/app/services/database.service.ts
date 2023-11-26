import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { Medecin } from "/Users/lillo/Desktop/INF3710_TP_5/common/medecin";

@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "hopital_bd",
    password: "root",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getAllMedecin(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query("SELECT * FROM hopital_bd.Medecins;");
    client.release()
    return res;
  }

  public async addMedecin(medecin: Medecin): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = 'INSERT INTO hopital_bd.Medecins VALUES($1, $2, $3, $4, $5, $6)';
    const values = [medecin.idMedecin, medecin.prenom, medecin.nom, medecin.specialite, medecin.anneesExperience, medecin.idService];
    const res = await client.query(query, values);
    client.release()
    return res;
  }

  public async modifyMedecin(medecin: Medecin): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `UPTATE hopital_bd.Medecins
                   SET prenom = $1, nom = $2, specialite = $3, anneesExperience = $4, idService = $5 
                   WHERE idMedecin='${medecin.idMedecin}'`;
    const values = [medecin.prenom, medecin.nom, medecin.specialite, medecin.anneesExperience, medecin.idService];
    const res = await client.query(query, values);
    client.release()
    return res;
  }

  public async deleteMedecin(idMedecin: number): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = `DELETE FROM hopital_bd.Medecins WHERE idMedecin='${idMedecin}'`;
    const res = await client.query(query);
    client.release()
    return res;
  }
}
