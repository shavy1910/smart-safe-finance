import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { spendingCategories } from "@/data/mockData";
import { motion } from "framer-motion";

const SpendingChart = () => {
  const total = spendingCategories.reduce((s, c) => s + c.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="card-glass p-6"
    >
      <h3 className="text-lg font-semibold font-display text-card-foreground mb-4">Spending Breakdown</h3>
      <div className="flex items-center gap-6">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={spendingCategories} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                {spendingCategories.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-2">
          {spendingCategories.map((cat) => (
            <div key={cat.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-muted-foreground">{cat.name}</span>
              </div>
              <span className="font-medium text-card-foreground">
                {((cat.value / total) * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SpendingChart;
