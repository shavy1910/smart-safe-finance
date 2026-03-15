import { motion } from "framer-motion";
import { useMemo } from "react";

interface RiskGaugeProps {
  score: number;
  size?: number;
}

const RiskGauge = ({ score, size = 200 }: RiskGaugeProps) => {
  const { color, label, description } = useMemo(() => {
    if (score <= 30) return { color: "hsl(145, 65%, 42%)", label: "Low Risk", description: "Action allowed" };
    if (score <= 60) return { color: "hsl(38, 92%, 50%)", label: "Medium Risk", description: "Warning: proceed with caution" };
    return { color: "hsl(0, 72%, 51%)", label: "High Risk", description: "Action temporarily blocked" };
  }, [score]);

  const radius = 80;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width={size} height={size / 2 + 20} viewBox="0 0 200 120">
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="hsl(200, 15%, 90%)" strokeWidth="12" strokeLinecap="round" />
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <text x="100" y="85" textAnchor="middle" className="font-display" fontSize="32" fontWeight="700" fill={color}>
          {score}
        </text>
        <text x="100" y="105" textAnchor="middle" fontSize="11" fill="hsl(200, 10%, 45%)">
          {label}
        </text>
      </svg>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default RiskGauge;
