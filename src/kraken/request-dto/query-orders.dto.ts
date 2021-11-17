import {IsNotEmpty} from "class-validator";

export class QueryOrdersDto {
    @IsNotEmpty()
    nonce: number;

    trades: boolean;

    userref: number;

    @IsNotEmpty()
    txid:number
}