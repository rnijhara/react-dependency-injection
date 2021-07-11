import {injectable} from "inversify";
import {Risk} from "../types/Risk";

@injectable()
export class RiskService {
  getRisks(): Promise<Risk[]> {
    return Promise.resolve([{id: 1, title: "Risk 1"}, {id: 2, title: "Risk 2"}]);
  }
}
