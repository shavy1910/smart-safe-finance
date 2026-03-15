import { overspendingAlerts } from "@/data/mockData";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const OverspendingAlerts = () => {
  if (overspendingAlerts.length === 0) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-glass p-5 border-warning/30">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="h-5 w-5 text-warning" />
        <h3 className="text-sm font-semibold font-display text-card-foreground">Overspending Alerts</h3>
      </div>
      <div className="space-y-2">
        {overspendingAlerts.map((alert) => (
          <div key={alert.category} className="p-3 rounded-lg bg-warning/5 border border-warning/20">
            <p className="text-sm text-card-foreground">
              You spent <span className="font-bold text-warning">{alert.increase}% more</span> on{" "}
              <span className="font-semibold">{alert.category}</span> this month.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              ₹{alert.amount.toLocaleString()} vs avg ₹{alert.average.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OverspendingAlerts;
