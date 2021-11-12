import {BadRequestException, Controller, Get, Param, ParseIntPipe, Post, Query} from "@nestjs/common";
import {CurrencyService} from "../services/currency.service";
import {NotFoundException} from "@nestjs/common/exceptions/not-found.exception";
import {IsNotEmpty} from "class-validator";
import {CurrenciesPairPipe} from "../pipes/currencies-pair.pipe";
import {StepPipe} from "../pipes/step.pipe";

@Controller()
export class BitstampController {
    constructor(
        private readonly currencyService: CurrencyService
    ) {
    }

    @Get('ticker/:currency_pair')
    ticker(@Param('currency_pair',CurrenciesPairPipe) currency_pair: string) {

        return {
            "high": "57263.74",
            "last": "55735.25",
            "timestamp": "1636716358",
            "bid": "55749.97",
            "vwap": "56487.09",
            "volume": "846.92646775",
            "low": "55526.92",
            "ask": "55771.21",
            "open": "56622.67"
        };
    }

    @Get('ticker_hour/:currency_pair')
    tickerHour(@Param('currency_pair',CurrenciesPairPipe) currency_pair: string) {

        return {
            "high": "57263.74",
            "last": "55735.25",
            "timestamp": "1636716358",
            "bid": "55749.97",
            "vwap": "56487.09",
            "volume": "846.92646775",
            "low": "55526.92",
            "ask": "55771.21",
            "open": "56622.67"
        };
    }

    @Get('order_book/:currency_pair')
    orderBook(@Param('currency_pair',CurrenciesPairPipe) currency_pair: string) {

        return {
            "timestamp": "1636716554",
            "microtimestamp": "1636716554311672",
            "bids": [
                [
                    "55863.14",
                    "0.04691573"
                ],
            ],

            "asks": [
                [
                    "55884.30",
                    "0.04691573"
                ],
            ]
        };
    }

    @Get('transactions/:currency_pair')
    transactions(@Param('currency_pair',CurrenciesPairPipe) currency_pair: string) {

        return [
            {
                "date": "1636716991",
                "tid": "207502351",
                "amount": "0.03862814",
                "type": "1",
                "price": "55770.29"
            },
            {
                "date": "1636716981",
                "tid": "207502344",
                "amount": "0.00885430",
                "type": "0",
                "price": "55821.34"
            },
        ];
    }

    @Get('trading-pairs-info')
    tradingPairsInfo() {
        return [
            {
                "trading": "Enabled",
                "base_decimals": 8,
                "url_symbol": "btcusd",
                "name": "BTC/USD",
                "instant_and_market_orders": "Enabled",
                "minimum_order": "20.0 USD",
                "counter_decimals": 2,
                "description": "Bitcoin / U.S. dollar"
            },
        ]
    }

    @Get('ohlc/:currency_pair')
    ohlc(
        @Param('currency_pair',CurrenciesPairPipe) currency_pair: string,
        @Query('step',StepPipe) step:number,
        @Query('limit') limit:number,
    ) {

        return 'cvxdsa';
    }

    @Get('eur_usd')
    eurUsd() {

    }

    @Post('balance')
    balance() {

    }

    @Post('user_transactions')
    userTransactions() {

    }

    @Post('crypto-transactions')
    cryptoTransactions() {

    }

    @Post('open_orders/all/')
    openOrdersAll() {

    }

    @Post('open_orders/{currency_pair}')
    openOrdersCurrencyPair() {

    }

    @Post('order_status')
    orderStatus() {

    }

    @Post('cancel_order')
    cancelOrder() {

    }

    @Post('cancel_all_orders')
    cancelAllOrders() {

    }

    @Post('buy/{currency_pair}')
    buyCurrencyPair() {

    }

    @Post('buy/market/{currency_pair}')
    buyMarket() {

    }

    @Post('/instant/{currency_pair}/')
    instant() {

    }

    @Post('/sell/{currency_pair}/')
    sell() {

    }

    @Post('/sell/market/{currency_pair}/')
    sellMarket() {

    }

    @Post('/sell/instant/{currency_pair}/')
    sellInstant() {

    }

    @Post('/withdrawal-requests/')
    withdrawalRequests() {

    }

    @Post('btc_withdrawal')
    btcWithdrawal() {

    }

    @Post('eth_withdrawal')
    ethWithdrawal() {

    }

    @Post('ltc_withdrawal')
    ltcWithdrawal() {

    }

    @Post('pax_withdrawal')
    paxWithdrawal() {

    }

    @Post('xlm_withdrawal')
    xlmWithdrawal() {

    }

    @Post('xrp_withdrawal')
    xrpWithdrawal() {

    }

    @Post('link_withdrawal')
    linkWithdrawal() {

    }

    @Post('omg_withdrawal')
    omgWithdrawal() {

    }

    @Post('usdc_withdrawal')
    usdcWithdrawal() {

    }

    @Post('aave_withdrawal')
    aaveWithdrawal() {

    }

    @Post('bat_withdrawal')
    batWithdrawal() {

    }

    @Post('uma_withdrawal')
    umaWithdrawal() {

    }

    @Post('dai_withdrawal')
    daiWithdrawal() {

    }

    @Post('knc_withdrawal')
    kncWithdrawal() {

    }

    @Post('mkr_withdrawal')
    mkrWithdrawal() {

    }

    @Post('zrx_withdrawal')
    zrxWithdrawal() {

    }

    @Post('gusd_withdrawal')
    gusdWithdrawal() {

    }

    @Post('algo_withdrawal')
    algoWithdrawal() {

    }

    @Post('audio_withdrawal')
    audioWithdrawal() {

    }

    @Post('crv_withdrawal')
    crvWithdrawal() {

    }

    @Post('snx_withdrawal')
    snxWithdrawal() {

    }

    @Post('uni_withdrawal')
    uniWithdrawal() {

    }

    @Post('yfi_withdrawal')
    yfiWithdrawal() {

    }

    @Post('comp_withdrawal')
    compWithdrawal() {

    }

    @Post('grt_withdrawal')
    grtWithdrawal() {

    }

    @Post('usdt_withdrawal')
    usdtWithdrawal() {

    }

    @Post('eurt_withdrawal')
    eurtWithdrawal() {

    }

    @Post('matic_withdrawal')
    maticWithdrawal() {

    }

    @Post('sushi_withdrawal')
    sushiWithdrawal() {

    }

    @Post('chz_withdrawal')
    chzWithdrawal() {

    }

    @Post('enj_withdrawal')
    enjWithdrawal() {

    }

    @Post('hbar_withdrawal')
    hbarWithdrawal() {

    }

    @Post('alpha_withdrawal')
    alphaWithdrawal() {

    }

    @Post('axs_withdrawal')
    axsWithdrawal() {

    }

    @Post('ftt_withdrawal')
    fttWithdrawal() {

    }

    @Post('sand_withdrawal')
    sandWithdrawal() {

    }

    @Post('storj_withdrawal')
    storjWithdrawal() {

    }

    @Post('fet_withdrawal')
    fetWithdrawal() {

    }

    @Post('rgt_withdrawal')
    rgtWithdrawal() {

    }

    @Post('skl_withdrawal')
    sklWithdrawal() {

    }

    @Post('cel_withdrawal')
    celWithdrawal() {

    }

    @Post('sxp_withdrawal')
    sxpWithdrawal() {

    }

    @Post('ripple_withdrawal')
    rippleWithdrawal() {

    }

    @Post('bch_address')
    bchAddress() {

    }

    @Post('btc_address')
    btcAddress() {

    }

    @Post('eth_address')
    ethAddress() {

    }

    @Post('ltc_address')
    ltcAddress() {

    }

    @Post('pax_address')
    paxAddress() {

    }

    @Post('xlm_address')
    xlmAddress() {

    }

    @Post('xrp_address')
    xrpAddress() {

    }

    @Post('link_address')
    linkAddress() {

    }

    @Post('omg_address')
    omgAddress() {

    }

    @Post('usdc_address')
    usdcAddress() {

    }

    @Post('aave_address')
    aaveAddress() {

    }

    @Post('bat_address')
    batAddress() {

    }

    @Post('uma_address')
    umaAddress() {

    }

    @Post('dai_address')
    daiAddress() {

    }

    @Post('knc_address')
    kncAddress() {

    }

    @Post('mkr_address')
    mkrAddress() {

    }

    @Post('zrx_address')
    zrxAddress() {

    }

    @Post('gusd_address')
    gusdAddress() {

    }

    @Post('algo_address')
    algoAddress() {

    }

    @Post('audio_address')
    audioAddress() {

    }

    @Post('crv_address')
    crvAddress() {

    }

    @Post('snx_address')
    snxAddress() {

    }

    @Post('uni_address')
    uniAddress() {

    }

    @Post('yfi_address')
    yfiAddress() {

    }

    @Post('comp_address')
    compAddress() {

    }

    @Post('grt_address')
    grtAddress() {

    }

    @Post('usdt_address')
    usdtAddress() {

    }

    @Post('eurt_address')
    eurtAddress() {

    }

    @Post('matic_address')
    maticAddress() {

    }

    @Post('sushi_address')
    sushiAddress() {

    }

    @Post('chz_address')
    chzAddress() {

    }

    @Post('enj_address')
    enjAddress() {

    }

    @Post('hbar_address')
    hbarAddress() {

    }

    @Post('alpha_address')
    alphaAddress() {

    }

    @Post('axs_address')
    axsAddress() {

    }

    @Post('ftt_address')
    fttAddress() {

    }

    @Post('sand_address')
    sandAddress() {

    }

    @Post('storj_address')
    storjAddress() {

    }

    @Post('fet_address')
    fetAddress() {

    }

    @Post('rgt_address')
    rgtAddress() {

    }

    @Post('skl_address')
    sklAddress() {

    }

    @Post('cel_address')
    celAddress() {

    }

    @Post('sxp_address')
    sxpAddress() {

    }

    @Post('ripple_address')
    rippleAddress() {

    }

    @Post('btc_unconfirmed')
    btcUnconfirmed() {

    }

    @Post('transfer-to-main')
    transferToMain() {

    }

    @Post('transfer-from-main')
    transferFromMain() {

    }

    @Post('withdrawal/open/')
    withdrawalOpen() {

    }

    @Post('withdrawal/status/')
    withdrawalStatus() {

    }

    @Post('withdrawal/cancel')
    withdrawalCancel() {

    }

    @Post('liquidation_address/new')
    liquidationAddressNew() {

    }

    @Post('liquidation_address/info/')
    liquidation_addressInfo() {

    }

    @Post('websockets_token')
    websocketsToken() {

    }

}