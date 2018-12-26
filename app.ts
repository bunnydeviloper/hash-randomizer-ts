type ValidSymbol = "#" | "$" // using type alias

interface GenerateConfig {
  symbol: ValidSymbol;
  hashLength: number;
}

function generateRandomId(options: GenerateConfig): string {
  return options.symbol + Math.random().toString(36).substr(2, options.hashLength);
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
      app.innerHTML = generateRandomId({
        symbol: "#",
        hashLength: 7
      });
    }
  }, 1000);
}
