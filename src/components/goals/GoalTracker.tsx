import { goals } from "@/data/mockData";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const GoalTracker = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-glass p-6">
      <div className="flex items-center gap-2 mb-5">
        <Target className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold font-display text-card-foreground">Financial Goals</h3>
      </div>
      <div className="space-y-4">
        {goals.map((goal, i) => {
          const pct = Math.round((goal.current / goal.target) * 100);
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="p-4 rounded-lg bg-muted/30 border border-border"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{goal.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{goal.name}</p>
                    <p className="text-xs text-muted-foreground">Target: {goal.deadline}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{pct}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1, delay: 0.2 * i }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>₹{(goal.current / 100000).toFixed(1)}L</span>
                <span>₹{(goal.target / 100000).toFixed(1)}L</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GoalTracker;
