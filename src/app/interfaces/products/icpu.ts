import { CpuSocketEnum } from "src/app/enums/cpu-socket-enum";
import { IBaseProduct } from "./ibase-product";

export interface ICpu extends IBaseProduct
{
    coreNumber: Number,
    l3Cache: Number,
    speed: Number,
    socketType: CpuSocketEnum,
}
