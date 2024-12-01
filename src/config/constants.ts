import { RiskLevel } from "../types/gamble";

// Valid risk levels
export const VALID_RISK_LEVELS: RiskLevel[] = ["balanced", "high", "low"];

// Risk weights for each risk level
export const RISK_WEIGHTS: Record<RiskLevel, number[]> = {
  balanced: [40, 40, 10, 10], // 40% loss, 40% no gain, 10% double, 10% triple
  high: [60, 25, 10, 5], // 60% loss, 25% no gain, 10% double, 5% triple
  low: [15, 50, 25, 10], // 15% loss, 50% no gain, 25% double, 10% triple
};
