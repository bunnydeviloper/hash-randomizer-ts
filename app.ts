type ValidSymbol = "#" | "$" // using type alias
// const symbol: "#" | "$" = "#"; // using union type
// const symbol: ValidSymbol = "#";
// const hashLength: number = 7;

function generateRandomId(symbol: ValidSymbol, hashLength?: number): string {
  return symbol + Math.random().toString(36).substr(2, hashLength);
}

// function userAlert(): void {
function userAlert() {
  alert('Hello!');
}

function checkError(): never {
  throw new Error('errorrrr');
  // never means the fn is expected to never return anything
  // another use case is infinite while loop
}

function main() {
  const app = document.getElementById("app");
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId("#", 7);
    }
  }, 1000);
}
