type ValidSymbol = "#" | "$" // using type alias

interface GenerateConfig {
  symbol: ValidSymbol;
  length: number;
}

function generateRandomId(symbol: ValidSymbol, length: number): string
function generateRandomId(options: GenerateConfig): string
function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol): string {
  if (typeof optionsOrSymbol === 'string') {
    return optionsOrSymbol + Math.random().toString(36).substr(2, length);
  }
  return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}

// generateRandomId("$", 7);
// generateRandomId({ symbol: "$", length: 5 })

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
        length: 7
      });
    }
  }, 1000);
}
