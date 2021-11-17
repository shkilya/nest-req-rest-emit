import {EmptyPrivateRequestDto} from "./empty-private-request.dto";
import {IsNotEmpty} from "class-validator";

export class AddressRequestDto extends EmptyPrivateRequestDto {
    @IsNotEmpty()
    currency: string
}