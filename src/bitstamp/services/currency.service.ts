import {Injectable} from "@nestjs/common";
import {rules} from "@typescript-eslint/eslint-plugin";

@Injectable()
export class CurrencyService {
    private currencyPairsList: string[] = ['btcusd', 'btceur', 'btcgbp', 'btcpax', 'btcusdt', 'btcusdc', 'gbpusd', 'gbpeur', 'eurusd', 'ethusd', 'etheur', 'ethbtc', 'ethgbp', 'ethpax', 'ethusdt', 'ethusdc', 'xrpusd', 'xrpeur', 'xrpbtc', 'xrpgbp', 'xrppax', 'xrpusdt', 'uniusd', 'unieur', 'unibtc', 'ltcusd', 'ltceur', 'ltcbtc', 'ltcgbp', 'linkusd', 'linkeur', 'linkbtc', 'linkgbp', 'linketh', 'maticusd', 'maticeur', 'xlmusd', 'xlmeur', 'xlmbtc', 'xlmgbp', 'fttusd', 'ftteur', 'bchusd', 'bcheur', 'bchbtc', 'bchgbp', 'aaveusd', 'aaveeur', 'aavebtc', 'axsusd', 'axseur', 'algousd', 'algoeur', 'algobtc', 'compusd', 'compeur', 'compbtc', 'snxusd', 'snxeur', 'snxbtc', 'hbarusd', 'hbareur', 'chzusd', 'chzeur', 'celusd', 'celeur', 'enjusd', 'enjeur', 'batusd', 'bateur', 'batbtc', 'mkrusd', 'mkreur', 'mkrbtc', 'zrxusd', 'zrxeur', 'zrxbtc', 'audiousd', 'audioeur', 'audiobtc', 'sklusd', 'skleur', 'yfiusd', 'yfieur', 'yfibtc', 'sushiusd', 'sushieur', 'alphausd', 'alphaeur', 'storjusd', 'storjeur', 'sxpusd', 'sxpeur', 'grtusd', 'grteur', 'umausd', 'umaeur', 'umabtc', 'omgusd', 'omgeur', 'omgbtc', 'omggbp', 'kncusd', 'knceur', 'kncbtc', 'crvusd', 'crveur', 'crvbtc', 'sandusd', 'sandeur', 'fetusd', 'feteur', 'rgtusd', 'rgteur', 'eurtusd', 'eurteur', 'usdtusd', 'usdteur', 'usdcusd', 'usdceur', 'usdcusdt', 'daiusd', 'paxusd', 'paxeur', 'paxgbp', 'eth2eth', 'gusdusd'];

    get currencyPairs(): Array<string> {
        return this.currencyPairsList;
    }

    get randomPair(): string {
        return this.currencyPairsList[Math.floor(Math.random() * this.currencyPairsList.length)]
    }

}