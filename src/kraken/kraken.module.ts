import { Module } from '@nestjs/common';
import {KrakenController} from "./controllers/kraken.controller";

@Module({
    controllers: [
        KrakenController
    ],
})
export class KrakenModule {}
