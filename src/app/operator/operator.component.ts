import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorsService } from '../operators.service';
import { IOperator } from '../types/operator.interface';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  @Input() operatorId: number = 0
  operator?: IOperator

  constructor(
    private route: ActivatedRoute,
    private operatorsService: OperatorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.operator = this.operatorsService.operators.find(
        (operator) => operator.id === Number(params.get("operatorId"))
      )
    })
  }
}
