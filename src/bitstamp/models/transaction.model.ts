import {OrderType} from "../enum/order-type.enum";

export interface Transaction {
    tid: number
    usd: number
    price: number
    fee: number
    btc: number
    datetime: Date
    type: OrderType
}