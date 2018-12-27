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
class Component {
  constructor() {
    this.log();
  }
  log() {
    console.log('Component created');
  }
}

class App extends Component {
  static id = 'app'
  onInit(el: HTMLElement | null): void {
    setInterval(function() {
      if (el) {
        el.innerHTML = generateRandomId({
          symbol: "#",
          length: 7
        });
      }
    }, 1000);
  }
}

function main(ComponentClass: typeof App) {
  const el = document.getElementById(ComponentClass.id); // use static properties

  const cmp = new ComponentClass(); // use instance properties on method
  cmp.onInit(el);
}

main(App);
