interface Person {
  firstName: string
  lastName: string
  getFullName(): string
}

class Foo implements Person {
  firstName: string = 'fn'
  lastName: string = 'ln'
  getFullName(): string {
    return this.firstName + this.lastName;
  }
}

let aPerson: Person = new Foo();

const myVar = {
  firstName: 'John',
  lastName: 'Doe',
  foo: 'foo',
  getFullName: () => "test"
}

aPerson = myVar;

// myVar is a simple object that has all structures of Person interface
// we can reassign aPerson to myVar because of duck typing
// note: aPerson.* can access all three properties/method, except 'foo'
