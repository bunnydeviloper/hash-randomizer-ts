import { generateRandomId, Component } from './utils';
import { random } from 'lodash';

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

function enumerable(isEnumerable: boolean) {
  return (
    target: any,
    propertyKey: any,
    propertyDescriptor: PropertyDescriptor
  ) => {
    propertyDescriptor.enumerable = isEnumerable
  }
}

function prop(x: any, name: string) {
  console.log(x, name);
}
function param(x: any, name: any, index: number) {
  console.log(x, name, index);
}

@Component({
  id: 'app'
})
class App {
  @prop
  static version = '10123';
  @enumerable(false)
  onInit(@param el: HTMLElement | null): void {
    setInterval(function() {
      if (el) {
        el.innerHTML = generateRandomId({
          symbol: "#",
          length: random(7, 15)
        });
      }
    }, 1000);
  }
}

for (let key in App.prototype) {
  console.log(key);
}

function main(ComponentClass: any) {
  const el = document.getElementById(ComponentClass.id); // use static properties

  const cmp = new ComponentClass(); // use instance properties on method
  cmp.onInit(el);
}

main(App);
