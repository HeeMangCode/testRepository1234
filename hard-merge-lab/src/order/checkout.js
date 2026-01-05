import { calculateFee } from "../payment/calculateFee.js";

export function checkout(order) {
  const fee = calculateFee(order.amount);
  return {
    total: order.amount + fee,
    fee
  };
}