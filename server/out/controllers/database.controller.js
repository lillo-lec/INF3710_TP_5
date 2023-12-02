"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.DatabaseController = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const inversify_1 = require("inversify");
const database_service_1 = require("../services/database.service");
const types_1 = require("../types");
// import { Medecin } from "../../../common/medecin";
// import express = require("express");
let DatabaseController = class DatabaseController {
    constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    dataBaseService) {
        this.dataBaseService = dataBaseService;
        this.router = (0, express_1.Router)();
        // À Commenter pour tester avec base de données 
        /*
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
    */
        // À Décommenter pour tester avec base de données
        this.router.get('/display', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const medecins = yield this.dataBaseService.getAllMedecin();
            res.status(http_status_codes_1.StatusCodes.OK).json(medecins);
        }));
        this.router.delete('/delete/:idMedecin', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idMedecin = Number(req.params.idMedecin);
            // À Décommenter pour tester avec base de données
            yield this.dataBaseService.deleteMedecin(idMedecin);
            console.log("test reception:" + idMedecin);
            res.status(http_status_codes_1.StatusCodes.OK).send();
        }));
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
};
DatabaseController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.DatabaseService)),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
exports.DatabaseController = DatabaseController;
//# sourceMappingURL=database.controller.js.map