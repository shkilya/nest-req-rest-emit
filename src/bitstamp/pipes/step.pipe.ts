import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {NotFoundException} from "@nestjs/common/exceptions/not-found.exception";

export class StepPipe implements PipeTransform<number|undefined, number> {
    private  stepList: Array<number> = [60, 180, 300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 259200];

    transform(value: number|undefined, metadata: ArgumentMetadata): number {
        if(value === undefined){
            return value
        }
        if (!this.stepList.some((item: number) => item == value)) {
            throw new NotFoundException();
        }
        return value;
    }

}