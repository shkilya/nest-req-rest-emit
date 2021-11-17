import {OrderTypeEnum} from "../../enum/order-type.enum";

export class CloseDto {
    ordertype: OrderTypeEnum
    price: string
    price2: string
}