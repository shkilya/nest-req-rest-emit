import {IsNotEmpty} from "class-validator";

export class BuyDto {

    @IsNotEmpty()
    amount: number

    @IsNotEmpty()
    price: number

    limit_price: number
    daily_order: any
    ioc_order: any
    fok_order: any
    client_order_id: any
}