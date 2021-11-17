import {EmptyPrivateRequestDto} from "./empty-private-request.dto";
import {IsNotEmpty} from "class-validator";

export class OrderRequestDto extends EmptyPrivateRequestDto {
    @IsNotEmpty()
    id:number
}
