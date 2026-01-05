export function calculateFee(amount) {
  // amount: number (KRW)
  return Math.floor(amount * 0.03);
}