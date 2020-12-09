import { Injectable } from '@angular/core';
import operators from "../assets/operators.json"
import { IOperator } from './types/operator.interface';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  operators: IOperator[] = []
  
  constructor() {}

  getOperatorsList() {
    this.operators = operators
    return this.operators
  }
}
