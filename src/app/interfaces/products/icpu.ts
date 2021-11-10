import { CpuSocketEnum } from "src/app/enums/cpu-socket-enum";
import { IBaseProduct } from "./ibase-product";

export interface ICpu extends IBaseProduct
{
    CoreNumber: Number,
    L3Cache: Number,
    Speed: Number,
    SocketType: CpuSocketEnum,
}
