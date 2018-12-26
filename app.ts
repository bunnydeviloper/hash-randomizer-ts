type ValidSymbol = "#" | "$" // using type alias
// const symbol: "#" | "$" = "#"; // using union type

const symbol: ValidSymbol = "#";
const hashLength: number = 7;

function generateRandomId() {
  return symbol + Math.random().toString(36).substr(2, hashLength);
}

function main() {
  const app = document.getElementById("app");
  setInterval(function() {
    app.innerHTML = generateRandomId();
  }, 1000);
}
