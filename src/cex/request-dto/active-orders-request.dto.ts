import {EmptyPrivateRequestDto} from "./empty-private-request.dto";
import {IsNotEmpty} from "class-validator";

export class ActiveOrdersRequestDto extends EmptyPrivateRequestDto {
    @IsNotEmpty()
    orders_list: string[]
}