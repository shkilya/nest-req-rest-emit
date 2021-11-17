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
import {SellDto} from "../request-dto/sell.dto";
import {IsNotEmpty, Max} from "class-validator";
import {WithdrawalRequestsTypeEnum} from "../enum/withdrawal-requests-type.enum";
import {WithdrawalOpenDto} from "../request-dto/withdrawal-open.dto";
import {WithdrawalRequestsStatusEnum} from "../enum/withdrawal-requests-status.enum";

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
        @Body('amount') amount: number
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
        @Body('amount') amount: number
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
    sell(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Body() sellDto: SellDto
    ) {
        return {
            id: 9,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 12,
            amount: 23
        }
    }

    @Post('/sell/market/{currency_pair}/')
    sellMarket(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Body('amount') amount: number
    ) {
        return {
            id: 9,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 12,
            amount: 23
        }
    }

    @Post('/sell/instant/{currency_pair}/')
    sellInstant(
        @Param('currency_pair', CurrenciesPairPipe) currency_pair: string,
        @Body('amount') amount: number
    ) {
        return {
            id: 9,
            datetime: new Date(),
            type: this.randomEnum(OrderType),
            price: 12,
            amount: 23
        }

    }

    @Post('/withdrawal-requests/')
    withdrawalRequests(
        @Body('timedelta') timedelta: number
    ) {
        return {
            id: 5,
            datetime: new Date(),
            type: this.randomEnum(WithdrawalRequestsTypeEnum),
            currency: 'usd',
            amount: 5,
            status: this.randomEnum(WithdrawalRequestsTypeEnum),
        }
    }

    @Post('btc_withdrawal')
    btcWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('eth_withdrawal')
    ethWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('ltc_withdrawal')
    ltcWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('pax_withdrawal')
    paxWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('xlm_withdrawal')
    xlmWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('xrp_withdrawal')
    xrpWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
        @Body('memo_id ') memo_id: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('link_withdrawal')
    linkWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
        @Body('destination_tag') destination_tag: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('omg_withdrawal')
    omgWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('usdc_withdrawal')
    usdcWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('aave_withdrawal')
    aaveWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('bat_withdrawal')
    batWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('uma_withdrawal')
    umaWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('dai_withdrawal')
    daiWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('knc_withdrawal')
    kncWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('mkr_withdrawal')
    mkrWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('zrx_withdrawal')
    zrxWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('gusd_withdrawal')
    gusdWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('algo_withdrawal')
    algoWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('audio_withdrawal')
    audioWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('crv_withdrawal')
    crvWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('snx_withdrawal')
    snxWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('uni_withdrawal')
    uniWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('yfi_withdrawal')
    yfiWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('comp_withdrawal')
    compWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('grt_withdrawal')
    grtWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('usdt_withdrawal')
    usdtWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('eurt_withdrawal')
    eurtWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('matic_withdrawal')
    maticWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('sushi_withdrawal')
    sushiWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('chz_withdrawal')
    chzWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('enj_withdrawal')
    enjWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
        @Body('memo_id') memo_id: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('hbar_withdrawal')
    hbarWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('alpha_withdrawal')
    alphaWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('axs_withdrawal')
    axsWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }


    @Post('ftt_withdrawal')
    fttWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('sand_withdrawal')
    sandWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('storj_withdrawal')
    storjWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('fet_withdrawal')
    fetWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('rgt_withdrawal')
    rgtWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('skl_withdrawal')
    sklWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('cel_withdrawal')
    celWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('sxp_withdrawal')
    sxpWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('ripple_withdrawal')
    rippleWithdrawal(
        @Body('amount') amount: number,
        @Body('address') address: string,
        @Body('currency') currency: string,
    ) {
        return {
            id: 6
        }
    }

    @Post('bch_address')
    bchAddress() {
        return uuid.v4()
    }

    @Post('btc_address')
    btcAddress() {
        return uuid.v4()
    }

    @Post('eth_address')
    ethAddress() {
        return uuid.v4()
    }

    @Post('ltc_address')
    ltcAddress() {
        return uuid.v4()
    }

    @Post('pax_address')
    paxAddress() {
        return uuid.v4()
    }

    @Post('xlm_address')
    xlmAddress() {
        return uuid.v4()
    }

    @Post('xrp_address')
    xrpAddress() {
        return uuid.v4()
    }

    @Post('link_address')
    linkAddress() {
        return uuid.v4()
    }

    @Post('omg_address')
    omgAddress() {
        return uuid.v4()
    }

    @Post('usdc_address')
    usdcAddress() {
        return uuid.v4()
    }

    @Post('aave_address')
    aaveAddress() {
        return uuid.v4()
    }

    @Post('bat_address')
    batAddress() {
        return uuid.v4()
    }

    @Post('uma_address')
    umaAddress() {
        return uuid.v4()
    }

    @Post('dai_address')
    daiAddress() {
        return uuid.v4()
    }

    @Post('knc_address')
    kncAddress() {
        return uuid.v4()
    }

    @Post('mkr_address')
    mkrAddress() {
        return uuid.v4()
    }

    @Post('zrx_address')
    zrxAddress() {
        return uuid.v4()
    }

    @Post('gusd_address')
    gusdAddress() {
        return uuid.v4()
    }

    @Post('algo_address')
    algoAddress() {
        return uuid.v4()
    }

    @Post('audio_address')
    audioAddress() {
        return uuid.v4()
    }

    @Post('crv_address')
    crvAddress() {
        return uuid.v4()
    }

    @Post('snx_address')
    snxAddress() {
        return uuid.v4()
    }

    @Post('uni_address')
    uniAddress() {
        return uuid.v4()
    }

    @Post('yfi_address')
    yfiAddress() {
        return uuid.v4()
    }

    @Post('comp_address')
    compAddress() {
        return uuid.v4()
    }

    @Post('grt_address')
    grtAddress() {
        return uuid.v4()
    }

    @Post('usdt_address')
    usdtAddress() {
        return uuid.v4()
    }

    @Post('eurt_address')
    eurtAddress() {
        return uuid.v4()
    }

    @Post('matic_address')
    maticAddress() {
        return uuid.v4()
    }

    @Post('sushi_address')
    sushiAddress() {
        return uuid.v4()
    }

    @Post('chz_address')
    chzAddress() {
        return uuid.v4()
    }

    @Post('enj_address')
    enjAddress() {
        return uuid.v4()
    }

    @Post('hbar_address')
    hbarAddress() {
        return uuid.v4()
    }

    @Post('alpha_address')
    alphaAddress() {
        return uuid.v4()
    }

    @Post('axs_address')
    axsAddress() {
        return uuid.v4()
    }

    @Post('ftt_address')
    fttAddress() {
        return uuid.v4()
    }

    @Post('sand_address')
    sandAddress() {
        return uuid.v4()
    }

    @Post('storj_address')
    storjAddress() {
        return uuid.v4()
    }

    @Post('fet_address')
    fetAddress() {
        return uuid.v4()
    }

    @Post('rgt_address')
    rgtAddress() {
        return uuid.v4()
    }

    @Post('skl_address')
    sklAddress() {
        return uuid.v4()
    }

    @Post('cel_address')
    celAddress() {
        return uuid.v4()
    }

    @Post('sxp_address')
    sxpAddress() {
        return uuid.v4()
    }

    @Post('ripple_address')
    rippleAddress() {
        return uuid.v4()
    }

    @Post('btc_unconfirmed')
    btcUnconfirmed() {
        return {
            amount: 25,
            address: 'cvxz',
            confirmations: 8
        }
    }

    @Post('transfer-to-main')
    transferToMain(
        @Body('amount') amount: number,
        @Body('currency') currency: string,
        @Body('subAccount') subAccount: string,
    ) {
        return {
            status: 'ok'
        }
    }

    @Post('transfer-from-main')
    transferFromMain(
        @Body('amount') amount: number,
        @Body('currency') currency: string,
        @Body('subAccount') subAccount: string,
    ) {
        return {
            status: 'ok'
        }
    }

    @Post('withdrawal/open')
    withdrawalOpen(
        @Body() WithdrawalOpenDto: WithdrawalOpenDto
    ) {
        return {id: 564};
    }

    @Post('withdrawal/status/')
    withdrawalStatus(
        @Body('id') id: string
    ) {
        return {
            status: this.randomEnum(WithdrawalRequestsStatusEnum)
        }
    }

    @Post('withdrawal/cancel')
    withdrawalCancel(
        @Body('id') id: string
    ) {
        return {
            id,
            amount: 25,
            currency: 'usd',
            account_currency: 'btc',
            type: this.randomEnum(WithdrawalRequestsTypeEnum)
        }
    }

    @Post('liquidation_address/new')
    liquidationAddressNew(
        @Body('liquidation_currency') liquidation_currency: string,
        @Body('address_format') address_format: string,
    ) {
        return {
            address: uuid.v4()
        }
    }

    @Post('liquidation_address/info/')
    liquidationAddressInfo(
        @Body('address') address: string,
    ) {
        return {
            address,
            currency_pair:this.currencyService.randomPair,
            transactions:[]
        }
    }
}