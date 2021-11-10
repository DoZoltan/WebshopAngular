import { CpuSocketEnum } from "src/app/enums/cpu-socket-enum";
import { MotherboardSizeStandardEnum } from "src/app/enums/motherboard-size-standard-enum";
import { RamSocketEnum } from "src/app/enums/ram-socket-enum";
import { IBaseProduct } from "./ibase-product";

export interface IMotherboard extends IBaseProduct
{
    Usb3Amount: Number,
    Wifi: Boolean,
    SizeStandard: MotherboardSizeStandardEnum,
    CpuSocketType: CpuSocketEnum,
    MemorySocketType: RamSocketEnum,
    MaxMemorySize: Number,
    NumberOfMemorySockets: Number,
}
