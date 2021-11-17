import {EmptyPrivateRequestDto} from "./empty-private-request.dto";
import {IsNotEmpty} from "class-validator";

export class CancelReplaceOrderRequestDto extends EmptyPrivateRequestDto {
    @IsNotEmpty()
    type: string

    @IsNotEmpty()
    amount: number

    @IsNotEmpty()
    price: number

    @IsNotEmpty()
    order_id: string
}