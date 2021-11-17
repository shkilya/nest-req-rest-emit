import {Body, Controller, Post} from "@nestjs/common";
import {QueryOrdersDto} from "../request-dto/query-orders.dto";
import {AddOrderDto} from "../request-dto/add-order.dto";
import {OrderAddedDto} from "../response-dto/order-added.dto";
import {WithdrawDto} from "../request-dto/withdraw.dto";

@Controller()
export class KrakenController {
    constructor() {
    }


    @Post('/private/Balance')
    balance(
        @Body('nonce') nonce:number
    )
    {
        return {
            "error": [],
            "result": {
                "XETH": "0.0000031000",
                "BCH": "0.0066300000",
                "ZUSD": "3.2829",
                "CRV": "0.0000000000",
                "KNC": "0.0053800000",
                "SNX": "0.0012700000",
                "ZEUR": "1591976.0171",
                "DASH": "4.2377614400",
                "PAXG": "0.1880000000",
                "EOS": "0.0000000000",
                "XLTC": "0.0173800000",
                "ADA": "562.94502300",
                "USDC": "0.00508000",
                "OMG": "0.0019400000",
                "BAT": "206.5962400000",
                "XXMR": "0.0000000000",
                "XZEC": "4.5371074100",
                "XREP": "0.0000000000",
                "LINK": "0.0000000000",
                "KFEE": "0.00",
                "XXLM": "1608.77651000",
                "GNO": "0.0002600000",
                "BSV": "0.0000000000",
                "DAI": "64.8344800000",
                "COMP": "0.0000000000",
                "XETC": "4.6264935600",
                "USDT": "34449.27144202",
                "STORJ": "0.0143600000",
                "XMLN": "3.0235900000",
                "XXRP": "437.30730000",
                "XXBT": "1.5140900200"
            }
        }
    }

    @Post('/private/Withdraw')
    withdraw(
        @Body() withdrawDto:WithdrawDto
    ) {
        return {
            "error": [ ],
            "result": {
                "refid": "AGBSO6T-UFMTTQ-I7KGS6"
            }
        }
    }

    @Post('/private/AddOrder')
    addOrder(
        @Body() addOrderDto: AddOrderDto
    ) {
        return {
            "error": [],
            "result": {
                "descr": {
                    "order": "buy 2.12340000 XBTUSD @ limit 45000.1 with 2:1 leverage",
                    "close": "close position @ stop loss 38000.0 -> limit 36000.0"
                },
                "txid": [
                    "OUF4EM-FRGI2-MQMWZD"
                ]
            }
        }
    }


    @Post('/private/QueryOrders')
    queryOrders(
        @Body() queryOrdersDto: QueryOrdersDto
    ) {
        return {
            "error": [],
            "result": {
                "OBCMZD-JIEE7-77TH3F": {
                    "refid": null,
                    "userref": 0,
                    "status": "closed",
                    "reason": null,
                    "opentm": 1616665496.7808,
                    "closetm": 1616665499.1922,
                    "starttm": 0,
                    "expiretm": 0,
                    "descr": {
                        "pair": "XBTUSD",
                        "type": "buy",
                        "ordertype": "limit",
                        "price": "37500.0",
                        "price2": "0",
                        "leverage": "none",
                        "order": "buy 1.25000000 XBTUSD @ limit 37500.0",
                        "close": ""
                    },
                    "vol": "1.25000000",
                    "vol_exec": "1.25000000",
                    "cost": "37526.2",
                    "fee": "37.5",
                    "price": "30021.0",
                    "stopprice": "0.00000",
                    "limitprice": "0.00000",
                    "misc": "",
                    "oflags": "fciq",
                    "trades": [
                        "TZX2WP-XSEOP-FP7WYR"
                    ]
                },
                "OMMDB2-FSB6Z-7W3HPO": {
                    "refid": null,
                    "userref": 0,
                    "status": "closed",
                    "reason": null,
                    "opentm": 1616592012.2317,
                    "closetm": 1616592012.2335,
                    "starttm": 0,
                    "expiretm": 0,
                    "descr": {
                        "pair": "XBTUSD",
                        "type": "sell",
                        "ordertype": "market",
                        "price": "0",
                        "price2": "0",
                        "leverage": "none",
                        "order": "sell 0.25000000 XBTUSD @ market",
                        "close": ""
                    },
                    "vol": "0.25000000",
                    "vol_exec": "0.25000000",
                    "cost": "7500.0",
                    "fee": "7.5",
                    "price": "30000.0",
                    "stopprice": "0.00000",
                    "limitprice": "0.00000",
                    "misc": "",
                    "oflags": "fcib",
                    "trades": [
                        "TJUW2K-FLX2N-AR2FLU"
                    ]
                }
            }
        }
    }
}