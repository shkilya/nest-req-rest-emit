import {IsNotEmpty} from "class-validator";

export class EmptyPrivateRequestDto {
    @IsNotEmpty()
    key: string
    @IsNotEmpty()
    signature: string
    @IsNotEmpty()
    nonce: string
}