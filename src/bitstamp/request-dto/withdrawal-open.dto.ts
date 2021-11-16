import {IsNotEmpty} from "class-validator";

export class WithdrawalOpenDto {

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    account_currency: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    iban: string;

    @IsNotEmpty()
    bic: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    postal_code: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    bank_name: string;

    @IsNotEmpty()
    bank_address: string;

    @IsNotEmpty()
    bank_postal_code: string;

    @IsNotEmpty()
    bank_city: string;
    @IsNotEmpty()
    bank_country: string;

    @IsNotEmpty()
    currency: string;
    comment : string;
}