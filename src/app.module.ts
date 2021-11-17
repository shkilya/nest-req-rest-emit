import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BitstampModule} from './bitstamp/bitstamp.module';
import {RouterModule} from "@nestjs/core";
import { KrakenModule } from './kraken/kraken.module';
import { CexModule } from './cex/cex.module';

@Module({
    imports: [
        BitstampModule,
        KrakenModule,
        RouterModule.register([
            {
                path: 'api/v2/bitstamp',
                module: BitstampModule,
            },
            {
                path: 'api/v2/kraken',
                module: KrakenModule,
            },
            {
                path: 'api/v2/cex',
                module: CexModule,
            },
        ]),
        CexModule,


    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
