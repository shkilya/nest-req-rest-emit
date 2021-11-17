import {Body, Param, Post} from "@nestjs/common";
import {EmptyPrivateRequestDto} from "../request-dto/empty-private-request.dto";
import {ActiveOrdersRequestDto} from "../request-dto/active-orders-request.dto";
import {OrderRequestDto} from "../request-dto/order-request.dto";
import {PlaceOrderRequestDto} from "../request-dto/place-order-request.dto";
import {AddressRequestDto} from "../request-dto/address-request.dto";
import {CancelReplaceOrderRequestDto} from "../request-dto/cancel-replace-order-request.dto";

export class CexController {
    @Post('balance')
    balance(
        @Body() emptyPrivateRequestDto: EmptyPrivateRequestDto
    ) {
        return {
            "timestamp": "1513177918",
            "username": "ud000000000",
            "BTC": {
                "available": "1.38000000",
                "orders": "0.00000000"
            },
            "BCH": {
                "available": "1.00000000",
                "orders": "0.00000000"
            },
            "ETH": {
                "available": "100.00000000",
                "orders": "0.00000000"
            },
            "LTC": {
                "available": "1.00000000"
            },
            "DASH": {
                "available": "1.00000000",
                "orders": "0.00000000"
            },
            "ZEC": {
                "available": "1.00000000",
                "orders": "0.00000000"
            },
            "USD": {
                "available": "998087.07",
                "orders": "0.00"
            },
            "EUR": {
                "available": "999562.56",
                "orders": "0.00"
            },
            "GBP": {
                "available": "1000000.00",
                "orders": "0.00"
            },
            "RUB": {
                "available": "1000000.00",
                "orders": "0.00"
            },
            "GHS": {
                "available": "0.00000000",
                "orders": "0.00000000"
            }
        }
    }

    @Post('open_orders')
    openOrders(
        @Body() emptyPrivateRequestDto: EmptyPrivateRequestDto
    ) {
        return [
            {
                "id": "13837040",
                "time": "1460020144872",
                "type": "sell",
                "price": "411.626",
                "amount": "1.00000000",
                "pending": "1.00000000",
                "symbol1": "BTC",
                "symbol2": "EUR"
            },
            {
                "id": "16452929",
                "time": "1462355019816",
                "type": "buy",
                "price": "400",
                "amount": "1.00000000",
                "pending": "1.00000000",
                "symbol1": "BTC",
                "symbol2": "USD"
            }
        ]
    }

    @Post('open_orders/{symbol1}/{symbol2}')
    openOrdersSymbols(
        @Param('symbol1') symbol1: string,
        @Param('symbol2') symbol2: string,
        @Body() emptyPrivateRequestDto: EmptyPrivateRequestDto
    ) {
        return [
            {
                "id": "13837040",
                "time": "1460020144872",
                "type": "sell",
                "price": "411.626",
                "amount": "1.00000000",
                "pending": "1.00000000",
                "symbol1": "BTC",
                "symbol2": "EUR"
            },
            {
                "id": "16452929",
                "time": "1462355019816",
                "type": "buy",
                "price": "400",
                "amount": "1.00000000",
                "pending": "1.00000000",
                "symbol1": "BTC",
                "symbol2": "USD"
            }
        ];
    }

    @Post('active_orders_status')
    activeOrdersStatus(
        @Body() activeOrdersRequestDto: ActiveOrdersRequestDto
    ) {
        return {
            "e": "active_orders_status",
            "ok": "ok",
            "data": [
                [
                    "8550408",
                    "0",
                    "0"
                ],
                [
                    "8550495",
                    "0.02000000",
                    "0.02000000"
                ],
                [
                    "8550497",
                    "0.04000000",
                    "0.02700000"
                ]
            ]
        };
    }

    @Post('archived_orders/{symbol1}/{symbol2}')
    archivedOrdersSymbols(
        @Param('symbol1') symbol1: string,
        @Param('symbol2') symbol2: string,
        @Body() activeOrdersRequestDto: ActiveOrdersRequestDto
    ) {
        return [
            {
                "id": "22348164",
                "type": "buy",
                "time": "2016-08-04T09:28:24.669Z",
                "lastTxTime": "2016-08-04T09:28:58.762Z",
                "lastTx": "22348407",
                "status": "d",
                "symbol1": "BTC",
                "symbol2": "USD",
                "amount": "1.00000000",
                "price": "564",
                "fa:USD": "0.00",
                "ta:USD": "563.98",
                "remains": "0.00000000",
                "a:BTC:cds": "1.00000000",
                "a:USD:cds": "565.13",
                "f:USD:cds": "0.00",
                "tradingFeeMaker": "0",
                "tradingFeeTaker": "0.2",
                "orderId": "22348164"
            },
            {
                "id": "22347874",
                "type": "buy",
                "time": "2016-08-04T09:27:40.316Z",
                "lastTxTime": "2016-08-04T09:27:47.527Z",
                "lastTx": "22347950",
                "status": "cd",
                "symbol1": "BTC",
                "symbol2": "USD",
                "amount": "1.00000000",
                "price": "564",
                "fa:USD": "0.00",
                "ta:USD": "359.72",
                "remains": "0.36219371",
                "a:BTC:cds": "0.63780629",
                "a:USD:cds": "565.13",
                "f:USD:cds": "0.00",
                "tradingFeeMaker": "0",
                "tradingFeeTaker": "0.2",
                "orderId": "22347874"
            }
        ]
    }

    @Post('cancel_order')
    cancelOrder(
        @Body() orderRequestDto: OrderRequestDto
    ) {
        return true;
    }

    @Post('cancel_orders/{symbol1}/{symbol2}')
    cancelOrderSymbols(
        @Param('symbol1') symbol1: string,
        @Param('symbol2') symbol2: string,
        @Body() emptyPrivateRequestDto: EmptyPrivateRequestDto
    ) {
        return {
            "e": "cancel_orders",
            "ok": "ok",
            "data": [
                "2407314",
                "2407317",
                "2407320",
                "2407323"
            ]
        }
    }

    @Post('place_order/{symbol1}/{symbol2}')
    placeOrderSymbols(
        @Param('symbol1') symbol1: string,
        @Param('symbol2') symbol2: string,
        @Body() placeOrderRequestDto: PlaceOrderRequestDto
    ) {
        return {
            "symbol2Amount": "10000",
            "symbol1Amount": "19970000",
            "time": 1506615736816,
            "message": "Your order has been completed. Bought 0.19970000 BTC for 100.00 USD",
            "type": "buy",
            "id": "88640269"
        }
    }

    @Post('get_order')
    getOrder(
        @Body() orderRequestDto:OrderRequestDto
    )
    {
        return {
            "id": "22347874",
            "type": "buy",
            "time": 1470302860316,
            "lastTxTime": "2016-08-04T09:27:47.527Z",
            "lastTx": "22347950",
            "pos": null,
            "user": "userId",
            "status": "cd",
            "symbol1": "BTC",
            "symbol2": "USD",
            "amount": "1.00000000",
            "price": "564",
            "fa:USD": "0.00",
            "ta:USD": "359.72",
            "remains": "0.36219371",
            "a:BTC:cds": "0.63780629",
            "a:USD:cds": "565.13",
            "f:USD:cds": "0.00",
            "tradingFeeMaker": "0",
            "tradingFeeTaker": "0.2",
            "tradingFeeStrategy": "Promo000Maker",
            "orderId": "22347874"
        }
    }

    @Post('get_order_tx')
    getOrderTx(
        @Body() orderRequestDto:OrderRequestDto
    )
    {
        return {
            "e": "get_order_tx",
            "ok": "ok",
            "data": {
                "id": "22347874",
                "type": "buy",
                "time": 1470302860316,
                "lastTxTime": "2016-08-04T09:27:47.527Z",
                "lastTx": "22347950",
                "user": "userId",
                "status": "cd",
                "symbol1": "BTC",
                "symbol2": "USD",
                "amount": "1.00000000",
                "price": "564",
                "fa:USD": "0.00",
                "ta:USD": "359.72",
                "remains": "0.36219371",
                "a:BTC:cds": "0.63780629",
                "a:USD:cds": "565.13",
                "f:USD:cds": "0.00",
                "tradingFeeMaker": "0",
                "tradingFeeTaker": "0.2",
                "tradingFeeStrategy": "Promo000Maker",
                "orderId": "22347874",
                "vtx": [
                    {
                        "id": "22347950",
                        "type": "cancel",
                        "time": "2016-08-04T09:27:47.527Z",
                        "user": "userId",
                        "c": "user:userId:a:USD",
                        "d": "order:22347874:a:USD",
                        "a": "204.28000000",
                        "amount": "204.28000000",
                        "balance": "1391212.24000000",
                        "symbol": "USD",
                        "order": "22347874",
                        "buy": null,
                        "sell": null,
                        "pair": null,
                        "pos": null,
                        "cs": "1391212.24",
                        "ds": 0
                    },
                    {
                        "id": "22347949",
                        "type": "buy",
                        "time": "2016-08-04T09:27:40.972Z",
                        "user": "userId",
                        "c": "user:userId:a:BTC",
                        "d": "order:22347874:a:BTC",
                        "a": "0.63780629",
                        "amount": "0.63780629",
                        "balance": "7633.93075975",
                        "symbol": "BTC",
                        "order": "22347874",
                        "buy": "22347874",
                        "sell": "22347877",
                        "pair": null,
                        "pos": null,
                        "cs": "7633.93075975",
                        "ds": 0,
                        "price": 564,
                        "symbol2": "USD",
                        "fee_amount": 0
                    },
                    {
                        "id": "22347876",
                        "type": "buy",
                        "time": "2016-08-04T09:27:40.316Z",
                        "user": "userId",
                        "c": "user:userId:a:USD",
                        "d": "order:22347874:a:USD",
                        "a": "1.13000000",
                        "amount": "-564.00000000",
                        "balance": "1391007.96000000",
                        "symbol": "USD",
                        "order": "22347874",
                        "buy": null,
                        "sell": null,
                        "pair": null,
                        "pos": null,
                        "cs": "1391007.96",
                        "ds": "564.00"
                    }
                ],
                "next": false,
                "prev": false
            }
        }
    }

    @Post('get_address')
    getAddress(
        @Body() addressRequestDto:AddressRequestDto
    )
    {
        return {
            "ok": "ok",
            "e": "get_address",
            "data": "3JjMEw3b2wcRuUQL7rA5JMzKXwEgiArSrb"
        }
    }

    @Post('get_myfee')
    getMyFee(
        @Body() emptyPrivateRequestDto:EmptyPrivateRequestDto
    )
    {
        return {
            "ok": "ok",
            "e": "get_myfee",
            "data": {
                "ETH:USD": {
                    "sell": "0.15",
                    "buyMaker": "0",
                    "buy": "0.15",
                    "sellMaker": "0"
                },
                "BCH:GBP": {
                    "sell": "0.15",
                    "buyMaker": "0",
                    "buy": "0.15",
                    "sellMaker": "0"
                },
                "ZEC:BTC": {
                    "sell": "0.15",
                    "buyMaker": "0",
                    "buy": "0.15",
                    "sellMaker": "0"
                },
                "ZEC:GBP": {
                    "sell": "0.15",
                    "buyMaker": "0",
                    "buy": "0.15",
                    "sellMaker": "0"
                }
            }
        }
    }

    @Post('cancel_replace_order/{symbol1}/{symbol2}')
    cancelReplaceOrderSymbols(
        @Body() cancelReplaceOrderRequestDto:CancelReplaceOrderRequestDto
    )
    {
        return {
            "complete": false,
            "price": "150",
            "amount": "0.02000000",
            "time": 1506952374430,
            "type": "buy",
            "id": "88646680",
            "pending": "0.02000000"
        }
    }
}
