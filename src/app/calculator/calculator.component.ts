import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  firstOperand: number = null;
  operator: string = null;
  waitForSecondNumber = false;


  //getNumber
  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v:this.currentNumber += v; 
      console.log(this.currentNumber);
    }
  }
  private doCalculation(op:string ,secondOp: number){
    switch(op){
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand += secondOp;
      case '=':
        return secondOp;
      }
      return 0;  
  }

  //getOperation
 public getOperation(op: string){
   console.log(op);

   if(this.firstOperand === null){
     this.firstOperand = Number(this.currentNumber);
   }else if(this.operator){
     const result = this.doCalculation(this.operator,Number(this.currentNumber));
     this.currentNumber = String(result);
     this.firstOperand = result;
   }
   this.operator = op;
   this.waitForSecondNumber = true;
   console.log(this.firstOperand);
 }
 //clear
 public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
 }

 getDecimal(){
   if(!this.currentNumber.includes('.')){
     this.currentNumber += '.';
   }
 }

  constructor() { }

  ngOnInit(): void {
  }

}
