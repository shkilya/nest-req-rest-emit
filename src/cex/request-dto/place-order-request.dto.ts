import {EmptyPrivateRequestDto} from "./empty-private-request.dto";
import {IsNotEmpty} from "class-validator";

export class PlaceOrderRequestDto extends EmptyPrivateRequestDto {
    @IsNotEmpty()
    order_type:string

    @IsNotEmpty()
    type:string

    @IsNotEmpty()
    amount:number

    @IsNotEmpty()
    price:string
}