import { RamSocketEnum } from "src/app/enums/ram-socket-enum";
import { IBaseProduct } from "./ibase-product";

export interface IRam extends IBaseProduct
{
    Gb: Number,
    Delay: Number,
    Speed: Number,
    SocketType: RamSocketEnum,
}
