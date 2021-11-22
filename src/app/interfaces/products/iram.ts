import { RamSocketEnum } from "src/app/enums/ram-socket-enum";
import { IBaseProduct } from "./ibase-product";

export interface IRam extends IBaseProduct
{
    gb: Number,
    delay: Number,
    speed: Number,
    socketType: RamSocketEnum,
}
