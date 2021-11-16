import {IsNotEmpty} from "class-validator";

export class SellDto {
    @IsNotEmpty()
    amount: number;
    @IsNotEmpty()
    price: number;
    limit_price: number;
    daily_order: number;
    ioc_order: number;
    fok_order: number;
    client_order_id : number;
}