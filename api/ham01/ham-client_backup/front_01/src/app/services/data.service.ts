import { Injectable } from '@angular/core';

import {Assay} from "../models/assay.model";
import {ASSAYS} from "../data/mock-assays";

import {ClMic} from "../models/cl-mic.model";
import {CLMICS} from "../data/mock-cl-mic";

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class DataService {

  constructor() { }

  getAssays(): Assay[] {
    return ASSAYS;
  }

  getAssay(id: number): Assay {
    return ASSAYS.find((assay) => assay.id === id);
  }

  getClmics(): ClMic[] {
    return CLMICS;
  }

  getClmic(clmic_id: number): ClMic {
    return CLMICS.find((clMic) => clMic.clmic_id === clmic_id);
  }

}
