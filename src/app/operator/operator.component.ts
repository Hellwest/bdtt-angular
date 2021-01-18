import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorsService } from '../operators.service';
import { IOperator } from '../types/operator.interface';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  operator?: IOperator

  constructor(
    private route: ActivatedRoute,
    private operatorsService: OperatorsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.operator = this.operatorsService.operators.find(
        (operator) => operator.id === Number(params.id)
      )
    })
  }
}
