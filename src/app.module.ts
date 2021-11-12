import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BitstampModule} from './bitstamp/bitstamp.module';
import {RouterModule} from "@nestjs/core";

@Module({
    imports: [
        BitstampModule,
        RouterModule.register([
            {
                path: 'api/v2/bitstamp',
                module: BitstampModule,
            },
        ]),

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
