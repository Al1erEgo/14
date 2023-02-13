import {january} from "./january";
import {february} from "./february";
import {march} from "./march";
import {april} from "./april";
import {may} from "./may";
import {june} from "./june";
import {july} from "./july";
import {august} from "./august";
import {september} from "./september";
import {october} from "./october";
import {november} from "./november";
import {december} from "./december";

type ComplimentsType = {
    [key: string]: string[]
}

export const compliments: ComplimentsType = {
        'January': [...january],
        'February': [...february],
        'March': [...march],
        'April': [...april],
        'May': [...may],
        'June': [...june],
        'July': [...july],
        'August': [...august],
        'September': [...september],
        'October': [...october],
        'November': [...november],
        'December': [...december],
    }