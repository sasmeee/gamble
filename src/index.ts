import { placeGamble } from "./services/gambleService";
import { GambleResults, RiskLevel } from "./types/gamble";

/**
 * Place a gamble with the given points and risk level.
 * @param points - The number of points to gamble.
 * @param riskLevel - Risk level ("balanced", "high", "low"). Defaults to "balanced".
 * @returns Result of the gamble.
 */
export const gamble = (
  points: number,
  riskLevel: RiskLevel = "balanced"
): GambleResults => {
  return placeGamble(points, riskLevel);
};
