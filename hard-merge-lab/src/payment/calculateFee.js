export function calculateFee(amount) {
  // amount: number (KRW)
  const fee = amount * 0.05;
  return fee > 10000 ? 10000 : Math.floor(fee);
}