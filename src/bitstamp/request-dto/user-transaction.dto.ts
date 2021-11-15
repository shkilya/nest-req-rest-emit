import {IsEmpty, IsEnum, IsIn, IsNotEmpty, IsNumber, Max} from "class-validator";
import {Sort} from "../enum/sort.enum";

export class UserTransactionDto {
    @IsNotEmpty()
    offset: number;

    @IsNotEmpty()
    limit: number;

    @IsEnum(Sort)
    sort: string = Sort.ASC;

    since_timestamp: number;

    @Max(1000)
    since_id: number;
}