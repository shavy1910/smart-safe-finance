import { assets } from "@/data/mockData";
import { motion } from "framer-motion";
import { Building, TrendingUp, Coins, PiggyBank, Car } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  property: Building,
  investment: TrendingUp,
  gold: Coins,
  savings: PiggyBank,
  vehicle: Car,
};

const AssetsTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="card-glass p-6"
    >
      <h3 className="text-lg font-semibold font-display text-card-foreground mb-4">Your Assets</h3>
      <div className="space-y-3">
        {assets.map((asset) => {
          const Icon = iconMap[asset.type] || PiggyBank;
          return (
            <div key={asset.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{asset.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{asset.type}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-card-foreground">₹{asset.value.toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AssetsTable;
