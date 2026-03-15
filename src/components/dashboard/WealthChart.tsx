import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { monthlyData } from "@/data/mockData";
import { motion } from "framer-motion";

const WealthChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="card-glass p-6"
    >
      <h3 className="text-lg font-semibold font-display text-card-foreground mb-4">Income vs Expenses</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 60%, 35%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(160, 60%, 35%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(42, 90%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(42, 90%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 90%)" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(200, 10%, 45%)" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(200, 10%, 45%)" }} tickFormatter={(v) => `₹${(v/1000)}k`} />
            <Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} />
            <Area type="monotone" dataKey="income" stroke="hsl(160, 60%, 35%)" fill="url(#incomeGrad)" strokeWidth={2} />
            <Area type="monotone" dataKey="expenses" stroke="hsl(42, 90%, 55%)" fill="url(#expenseGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default WealthChart;
