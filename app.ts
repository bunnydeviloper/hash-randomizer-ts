const symbol: string = "#";
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
