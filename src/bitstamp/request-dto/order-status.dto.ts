import {IsNotEmpty} from "class-validator";

export class OrderStatusDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    client_order_id: string
}