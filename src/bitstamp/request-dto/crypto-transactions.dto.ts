import {IsNotEmpty, Max, Min} from "class-validator";

export class CryptoTransactionsDto {
    @IsNotEmpty()
    @Min(1)
    @Max(1000)
    limit:number = 100;

    @IsNotEmpty()
    @Max(200000)
    offset:number = 0;

    include_ious:any
}