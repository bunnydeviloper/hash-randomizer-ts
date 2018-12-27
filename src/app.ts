import { generateRandomId } from './utils';
function identity<T> (arg: T): T { // using generic
  return arg;
}

// identity<number>(1);
// identity(1).toString(); // able to use number's available methods
// identity('string');

// function userAlert(): void {
function userAlert() {
  alert('Hello!');
}

function checkError(): never {
  throw new Error('errorrrr');
  // never means the fn is expected to never return anything
  // another use case is infinite while loop
}

/*
class App {
  id: string
  constructor() {
    this.id = 'app'
  }
}
*/

class App {
  static id = 'app'
}

function main(ComponentClass: typeof App) {
  // const cmp = new ComponentClass();
  const app = document.getElementById(ComponentClass.id);
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId({
        symbol: "#",
        length: 7
      });
    }
  }, 1000);
}

main(App);
