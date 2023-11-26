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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseController = void 0;
const express_1 = require("express");
const inversify_1 = require("inversify");
const database_service_1 = require("../services/database.service");
const types_1 = require("../types");
// import { StatusCodes } from "http-status-codes";
let DatabaseController = class DatabaseController {
    constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    dataBaseService) {
        this.dataBaseService = dataBaseService;
        this.initializeRoutes();
    }
    get router() {
        const router = (0, express_1.Router)();
        return router;
    }
    initializeRoutes() {
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
    }
};
DatabaseController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.DatabaseService)),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
exports.DatabaseController = DatabaseController;
// TODO: get, post, delete...
// TODO: à travers de nodejs.json on partage les fonctions avec le client.
//# sourceMappingURL=database.controller.js.map