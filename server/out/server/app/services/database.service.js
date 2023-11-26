"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const inversify_1 = require("inversify");
const pg = require("pg");
require("reflect-metadata");
let DatabaseService = class DatabaseService {
    constructor() {
        this.connectionConfig = {
            user: "postgres",
            database: "hopital_bd",
            password: "root",
            port: 5432,
            host: "127.0.0.1",
            keepAlive: true
        };
        this.pool = new pg.Pool(this.connectionConfig);
    }
    getAllMedecin() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const res = yield client.query("SELECT * FROM hopital_bd.Medecins;");
            client.release();
            return res;
        });
    }
    addMedecin(medecin) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const query = 'INSERT INTO hopital_bd.Medecins VALUES($1, $2, $3, $4, $5, $6)';
            const values = [medecin.idMedecin, medecin.prenom, medecin.nom, medecin.specialite, medecin.anneesExperience, medecin.idService];
            const res = yield client.query(query, values);
            client.release();
            return res;
        });
    }
    modifyMedecin(medecin) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const query = `UPTATE hopital_bd.Medecins
                   SET prenom = $1, nom = $2, specialite = $3, anneesExperience = $4, idService = $5 
                   WHERE idMedecin='${medecin.idMedecin}'`;
            const values = [medecin.prenom, medecin.nom, medecin.specialite, medecin.anneesExperience, medecin.idService];
            const res = yield client.query(query, values);
            client.release();
            return res;
        });
    }
    deleteMedecin(idMedecin) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const query = `DELETE FROM hopital_bd.Medecins WHERE idMedecin='${idMedecin}'`;
            const res = yield client.query(query);
            client.release();
            return res;
        });
    }
};
DatabaseService = __decorate([
    (0, inversify_1.injectable)()
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map