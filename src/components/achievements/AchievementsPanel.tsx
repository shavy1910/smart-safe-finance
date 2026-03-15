import { achievements } from "@/data/mockData";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const AchievementsPanel = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-glass p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-semibold font-display text-card-foreground">Achievements</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className={`p-3 rounded-lg text-center border transition-all ${
              a.unlocked ? "border-accent/30 bg-accent/5" : "border-border bg-muted/30 opacity-50"
            }`}
          >
            <span className="text-2xl block mb-1">{a.icon}</span>
            <p className="text-xs font-semibold text-card-foreground">{a.name}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{a.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementsPanel;
