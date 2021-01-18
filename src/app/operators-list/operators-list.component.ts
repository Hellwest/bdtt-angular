import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../operators.service';
import { IOperator } from '../types/operator.interface';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.css']
})
export class OperatorsListComponent implements OnInit {
  operators: IOperator[] = []

  constructor(private operatorsService: OperatorsService) {}

  ngOnInit(): void {
    this.operators = this.operatorsService.getOperatorsList()
  }
}
