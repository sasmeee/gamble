export type GambleResults = {
  newPoints: number;
  status:
    | "double"
    | "triple"
    | "loss"
    | "no gain"
    | "invalid points"
    | "invalid risk level"
    | "invalid points type"
    | "invalid risk level type";
};

export type RiskLevel = "balanced" | "high" | "low";
