import { Module } from '@nestjs/common';
import {AppController} from "../app.controller";
import {BitstampController} from "./controllers/bitstamp.controller";
import {CurrencyService} from "./services/currency.service";

@Module({
    providers:[
        CurrencyService
    ],
    controllers: [
        BitstampController
    ],
})
export class BitstampModule {}
