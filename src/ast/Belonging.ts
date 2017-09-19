import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class Belonging extends Exp {

  elem: Exp
  list: Exp;

  constructor(elem: Exp, list: Exp) {
    super();
    this.elem = elem;
    this.list = list;
  }

  toString(): string {
    return `Belonging(${this.elem.toString()},${this.list.toString()})`;
  }

  unparse(): string {
    return `(${this.elem.unparse()} <- ${this.list.unparse()}])`;
  }

  evaluate(state: State): any {
    var l = this.list.evaluate(state);
    for(var i=0;i<l.length;i++){
    
    }
    return i > -1;
  }

}
