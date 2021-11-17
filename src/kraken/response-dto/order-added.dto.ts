interface Description {
    order: string,
    close: string,
}

export interface OrderAddedDto {
    descr: Description
    txid: string[]

}