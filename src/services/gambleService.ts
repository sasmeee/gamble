import { GambleResults, RiskLevel } from "../types/gamble";
import { getWeightedOutcome } from "../utils/random";
import { RISK_WEIGHTS, VALID_RISK_LEVELS } from "../config/constants";

export const placeGamble = (
  points: number,
  riskLevel: RiskLevel
): GambleResults => {
  // validate inputs
  if (typeof points !== "number" || isNaN(points)) {
    return { newPoints: 0, status: "invalid points type" };
  }

  if (typeof riskLevel !== "string") {
    return { newPoints: 0, status: "invalid risk level type" };
  }

  if (points <= 0) {
    return { newPoints: points, status: "invalid points" };
  }

  if (!VALID_RISK_LEVELS.includes(riskLevel)) {
    return { newPoints: 0, status: "invalid risk level" };
  }

  const weights = RISK_WEIGHTS[riskLevel];
  const outcome = getWeightedOutcome(weights);

  // map outcome index to result
  const outcomesMap: GambleResults[] = [
    { newPoints: 0, status: "loss" }, // 0: loss
    { newPoints: points, status: "no gain" }, // 1: no gain
    { newPoints: points * 2, status: "double" }, // 2: double
    { newPoints: points * 3, status: "triple" }, // 3: triple
  ];

  return outcomesMap[outcome] || { newPoints: 0, status: "loss" };
};
