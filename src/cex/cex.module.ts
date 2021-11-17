import { Module } from '@nestjs/common';
import {CexController} from "./controllers/cex.controller";

@Module({
    controllers:[
        CexController
    ]
})
export class CexModule {}
