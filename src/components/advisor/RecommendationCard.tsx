import { motion } from "framer-motion";
import { TrendingUp, Wallet, Receipt, PiggyBank, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  investment: TrendingUp,
  budget: Wallet,
  tax: Receipt,
  savings: PiggyBank,
};

const impactColors: Record<string, string> = {
  high: "bg-success/10 text-success",
  medium: "bg-warning/10 text-warning",
  low: "bg-info/10 text-info",
};

interface RecommendationCardProps {
  title: string;
  description: string;
  category: string;
  impact: string;
  delay?: number;
}

const RecommendationCard = ({ title, description, category, impact, delay = 0 }: RecommendationCardProps) => {
  const Icon = iconMap[category] || Lightbulb;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="card-glass p-5 hover:glow-primary transition-all duration-300"
    >
      <div className="flex gap-4">
        <div className="p-2.5 rounded-lg bg-primary/10 h-fit">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold font-display text-card-foreground">{title}</h4>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${impactColors[impact]}`}>
              {impact} impact
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;
