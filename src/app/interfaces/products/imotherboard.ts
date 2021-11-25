import { CpuSocketEnum } from "src/app/enums/cpu-socket-enum";
import { MotherboardSizeStandardEnum } from "src/app/enums/motherboard-size-standard-enum";
import { RamSocketEnum } from "src/app/enums/ram-socket-enum";
import { IBaseProduct } from "./ibase-product";

export interface IMotherboard extends IBaseProduct
{
    usb3Amount: Number;
    wifi: Boolean;
    sizeStandard: MotherboardSizeStandardEnum;
    cpuSocketType: CpuSocketEnum;
    memorySocketType: RamSocketEnum;
    maxMemorySize: Number;
    numberOfMemorySockets: Number;
}
