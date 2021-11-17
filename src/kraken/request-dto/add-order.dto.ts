import {OrderTypeEnum} from "../enum/order-type.enum";
import {IsNotEmpty} from "class-validator";
import {OrderDirectionDto} from "../enum/order-direction.dto";
import {TimeinforceEnum} from "../enum/timeinforce.enum";
import {CloseDto} from "./add-order/close.dto";

export class AddOrderDto {
    @IsNotEmpty()
    nonce: number;
    userref: number;
    @IsNotEmpty()
    ordertype: OrderTypeEnum;
    @IsNotEmpty()
    type: OrderDirectionDto;
    volume: string;

    @IsNotEmpty()
    pair: string;

    price: string
    price2: string
    leverage: string
    oflags: string
    timeinforce: TimeinforceEnum = TimeinforceEnum.GTC
    starttm: string = String(0)
    expiretm: string
    close: CloseDto
    deadline: string
    validate: boolean
}