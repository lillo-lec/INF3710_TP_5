import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";

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

  public async addMedecin(idMedecin: number, prenom: string, nom: string, specialite: string, anneesExperience: number, idService: number): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const query = 'INSERT INTO hopital_bd.Medecins VALUES($1, $2, $3, $4, $5, $6)';
    const values = [idMedecin, prenom, nom, specialite, anneesExperience, idService];
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
