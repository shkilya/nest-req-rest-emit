import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';
import {CurrencyService} from "../services/currency.service";
import {NotFoundException} from "@nestjs/common/exceptions/not-found.exception";

@Injectable()
export class CurrenciesPairPipe implements PipeTransform<string, string> {
    constructor(
        private readonly currenciesService: CurrencyService
    ) {
    }

    transform(value: string, metadata: ArgumentMetadata): string {
        if (!this.currenciesService.currencyPairs.some(item => item === value)) {
            throw new NotFoundException();
        }
        return value;
    }
}
