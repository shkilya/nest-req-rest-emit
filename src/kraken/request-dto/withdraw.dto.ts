import {IsNotEmpty} from "class-validator";

export class WithdrawDto {
    @IsNotEmpty()
    nonce: string

    @IsNotEmpty()
    asset: string

    @IsNotEmpty()
    key: string

    @IsNotEmpty()
    amount: string
}