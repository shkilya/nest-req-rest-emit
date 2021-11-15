import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import {CurrencyService} from "../services/currency.service";
import {CurrenciesPairPipe} from "../pipes/currencies-pair.pipe";
import {StepPipe} from "../pipes/step.pipe";
import {UserTransactionDto} from "../request-dto/user-transaction.dto";
import * as uuid from "uuid";
import {TransactionType} from "../enum/transaction-type.enum";
import {CryptoTransactionsDto} from "../request-dto/crypto-transactions.dto";
import {OrderType} from "../enum/order-type.enum";
import {OrderStatusDto} from "../request-dto/order-status.dto";
import {OrderStatusEnum} from "../enum/order-status.enum";
import {Transaction} from "../models/transaction.model";
import {BuyDto} from "../request-dto/buy.dto";

@Controller()
export class BitstampController {
    constructor(
        private readonly currencyService: CurrencyService
    ) {
    }

    @Get('ticker/:currency_pair')
    ticker(@Param('currency_pair', CurrenciesPairPipe) currency_pair: string) {

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
    tickerHour(@Param('currency_pair', CurrenciesPairPipe) currency_pair: string) {

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
    orderBook(@Param('currency_pair', CurrenciesPairPipe) currency_pair: string) {

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
    transactions(@Param('currency_pair', CurrenciesPairPipe) currency_pair: string) {

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
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Query('step', StepPipe) step: number,
        @Query('limit') limit: number,
    ) {

        return {
            "data": {
                "pair": "BTC/USD",
                "ohlc": [
                    {
                        "high": "65637.23",
                        "timestamp": "1636963440",
                        "volume": "0.39457928",
                        "low": "65586.00",
                        "close": "65586.00",
                        "open": "65637.23"
                    },
                    {
                        "high": "65608.74",
                        "timestamp": "1636963500",
                        "volume": "0.10936318",
                        "low": "65594.60",
                        "close": "65594.60",
                        "open": "65605.34"
                    },
                    {
                        "high": "65571.56",
                        "timestamp": "1636963560",
                        "volume": "0.00065683",
                        "low": "65571.56",
                        "close": "65571.56",
                        "open": "65571.56"
                    },
                    {
                        "high": "65584.59",
                        "timestamp": "1636963620",
                        "volume": "0.38167416",
                        "low": "65541.93",
                        "close": "65584.59",
                        "open": "65557.23"
                    },
                    {
                        "high": "65569.35",
                        "timestamp": "1636963680",
                        "volume": "0.00427700",
                        "low": "65534.02",
                        "close": "65534.02",
                        "open": "65569.35"
                    },
                    {
                        "high": "65600.09",
                        "timestamp": "1636963740",
                        "volume": "11.19055656",
                        "low": "65536.20",
                        "close": "65536.20",
                        "open": "65549.81"
                    },
                    {
                        "high": "65562.83",
                        "timestamp": "1636963800",
                        "volume": "0.88659979",
                        "low": "65508.88",
                        "close": "65527.69",
                        "open": "65562.83"
                    },
                    {
                        "high": "65541.13",
                        "timestamp": "1636963860",
                        "volume": "0.39777497",
                        "low": "65513.40",
                        "close": "65532.49",
                        "open": "65541.13"
                    },
                    {
                        "high": "65536.63",
                        "timestamp": "1636963920",
                        "volume": "0.01444073",
                        "low": "65526.23",
                        "close": "65526.23",
                        "open": "65536.63"
                    },
                    {
                        "high": "65520.00",
                        "timestamp": "1636963980",
                        "volume": "0.00033107",
                        "low": "65520.00",
                        "close": "65520.00",
                        "open": "65520.00"
                    }
                ]
            }
        };
    }

    @Get('eur_usd')
    eurUsd() {
        return {
            "sell": "1.13333220",
            "buy": "1.15515333"
        };
    }

    @Post('balance')
    balance() {
        return {
            usd_balance: 100,
            btc_balance: 100,
            eur_balance: 100,
            xrp_balance: 100,
            bch_balance: 100,
            eth_balance: 100,
            ltc_balance: 100,
            usd_reserved: 100,
            btc_reserved: 100,
            eur_reserved: 100,
            xrp_reserved: 100,
            bch_reserved: 100,
            eth_reserved: 100,
            ltc_reserved: 100,
            usd_available: 100,
            btc_available: 100,
            eur_available: 100,
            xrp_available: 100,
            bch_available: 100,
            eth_available: 100,
            ltc_available: 100,
            bchbtc_fee: 1.1,
            bcheur_fee: 1.1,
            bchusd_fee: 1.1,
            btceur_fee: 1.1,
            btcusd_fee: 1.1,
            ethbtc_fee: 1.1,
            etheur_fee: 1.1,
            ethusd_fee: 1.1,
            eurusd_fee: 1.1,
            ltcbtc_fee: 1.1,
            ltceur_fee: 1.1,
            ltcusd_fee: 1.1,
            xrpbtc_fee: 1.1,
            xrpeur_fee: 1.1,
            xrpusd_fee: 1.1,
        }
    }

    @Post('balance/:currency_pair')
    balanceByCurrency(@Param('currency_pair', CurrenciesPairPipe) currency_pair: string,) {
        return {
            usd_balance: 100,
        }
    }


    private randomEnum<T>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
        const randomIndex = Math.floor(Math.random() * enumValues.length)
        return enumValues[randomIndex]
    }

    @Post('user_transactions')
    userTransactions(@Body() userTransactionDto: UserTransactionDto) {

        return {
            datetime: new Date(),
            id: uuid.v4(),
            type: this.randomEnum(TransactionType),
            usd: 100,
            eur: 100,
            fee: 1,
            order_id: 3
        }

        // return {
        //     datetime:new Date(),
        //     id	Transaction ID.
        //     type	Transaction type: 0 - deposit; 1 - withdrawal; 2 - market trade; 14 - sub account transfer; 25 - credited with staked assets; 26 - sent assets to staking; 27 - staking reward; 32 - referral reward; 35 - inter account transfer.
        //     usd	USD amount.
        //     eur	EUR amount.
        //     btc	BTC amount.
        //     xrp	XRP amount.
        //     gbp	GBP amount.
        //     bch	BCH amount.
        //     eth	ETH amount.
        //     ltc	LTC amount.
        //     pax	PAX amount.
        //     xlm	XLM amount.
        //     eth2	ETH2 amount.
        //     eth2r	ETH2R amount.
        //     link	LINK amount.
        //     omg	OMG amount.
        //     usdc	USDC amount.
        //     aave	AAVE amount.
        //     bat	BAT amount.
        //     uma	UMA amount.
        //     dai	DAI amount.
        //     knc	KNC amount.
        //     mkr	MKR amount.
        //     zrx	ZRX amount.
        //     gusd	GUSD amount.
        //     algo	ALGO amount.
        //     audio	AUDIO amount.
        //     crv	CRV amount.
        //     snx	SNX amount.
        //     uni	UNI amount.
        //     yfi	YFI amount.
        //     comp	COMP amount.
        //     grt	GRT amount.
        //     usdt	USDT amount.
        //     eurt	EURT amount.
        //     matic	MATIC amount.
        //     sushi	SUSHI amount.
        //     chz	CHZ amount.
        //     enj	ENJ amount.
        //     hbar	HBAR amount.
        //     alpha	ALPHA amount.
        //     axs	AXS amount.
        //     ftt	FTT amount.
        //     sand	SAND amount.
        //     storj	STORJ amount.
        //     fet	FET amount.
        //     rgt	RGT amount.
        //     skl	SKL amount.
        //     cel	CEL amount.
        //     sxp	SXP amount.
        //     btc_usd (or other trading pair used, eg btc_eur)	Exchange rate.
        //     fee	Transaction fee.
        //     order_id
        // };
    }

    @Post('crypto-transactions')
    cryptoTransactions(@Body() cryptoTransactionsDto: CryptoTransactionsDto) {

        return {
            currency: "usd",
            destinationAddress: 'Destination Address',
            txid: 'Transaction Hash',
            amount: 'Amount',
            datetime: new Date(),
        }
    }

    @Post('open_orders/all/')
    openOrdersAll() {
        return [
            {
                id: 5,
                datetime: new Date(),
                type: this.randomEnum(OrderType),
                price: 3,
                amount: 2,
                currency_pair: 'btcusd',
                client_order_id: '8'
            }
        ];
    }


    @Post('open_orders/{currency_pair}')
    openOrdersCurrencyPair(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
    ) {

        return {
            id: 5,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 3,
            amount: 2,
            currency_pair: 'btcusd',
            client_order_id: '8'
        };
    }

    @Post('order_status')
    orderStatus(@Body() orderStatusDto: OrderStatusDto) {
        return {
            status: this.randomEnum(OrderStatusEnum),
            id: 6,
            transactions: [
                {
                    tid: 5,
                    usd: 5,
                    price: 5,
                    fee: 5,
                    btc: 5,
                    datetime: new Date(),
                    type: this.randomEnum(OrderType)
                }
            ] as Transaction[]
        };
    }

    @Post('cancel_order')
    cancelOrder(@Param('id', ParseIntPipe) id: number) {
        return {
            id: 5,
            amount: 2,
            price: 32,
            type: OrderType.Buy
        }
    }

    @Post('cancel_all_orders')
    cancelAllOrders() {
        return [
            {
                canceled:
                    {
                        id: 5,
                        amount: 5,
                        price: 5,
                        type: this.randomEnum(OrderType),
                        currency_pair: "BTC/USD"
                    },
                success: true
            },
            {
                canceled:
                    {
                        id: 77,
                        amount: 77,
                        price: 77,
                        type: this.randomEnum(OrderType),
                        currency_pair: "BTC/USD"
                    },
                success: true
            },
        ]
    }

    @Post('cancel_all_orders/{currency_pair}')
    cancelAllOrdersByPair(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
    ) {
        return {
            canceled:
                {
                    id: 5,
                    amount: 5,
                    price: 5,
                    type: this.randomEnum(OrderType),
                    currency_pair: "BTC/USD"
                },
            success: true
        }
    }

    @Post('buy/{currency_pair}')
    buyCurrencyPair(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Body() butDto: BuyDto
    ) {
        return {
            id: 9,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 12,
            amount: 23
        }
    }

    @Post('buy/market/{currency_pair}')
    buyMarket(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Body('amount') amount:number
    ) {

        return {
            id: 9,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 12,
            amount: 23
        }
    }

    @Post('/instant/{currency_pair}/')
    instant(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Body('amount') amount:number
    ) {

        return {
            id: 9,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 12,
            amount: 23
        }
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