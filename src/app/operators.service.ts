import { Injectable } from '@angular/core';
import operators from "../assets/operators.json"

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  constructor() {}

  getOperatorsList() {
    return operators
  }
}
