export type ValidSymbol = "#" | "$" // using type alias

export interface GenerateConfig {
  symbol: ValidSymbol;
  length: number;
}

export function generateRandomId(symbol: ValidSymbol, length: number): string
export function generateRandomId(options: GenerateConfig): string
export function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol): string {
  if (typeof optionsOrSymbol === 'string') {
    return optionsOrSymbol + Math.random().toString(36).substr(2, length);
  }
  return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}

// generateRandomId("$", 7);
// generateRandomId({ symbol: "$", length: 5 })

export function Component (options: { id: string }) {
  return (target: any) => {
    target.id = options.id;
  }
}
