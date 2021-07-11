import "reflect-metadata";
import { Container } from 'inversify';
import { RiskService } from '../services/RiskService';

export const container = new Container();
container.bind<RiskService>('riskService').to(RiskService);
