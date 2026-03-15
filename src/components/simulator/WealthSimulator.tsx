import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Calculator } from "lucide-react";

const WealthSimulator = () => {
  const [income, setIncome] = useState(125000);
  const [expenses, setExpenses] = useState(72000);
  const [sip, setSip] = useState(15000);
  const [years, setYears] = useState(10);

  const projectedData = useMemo(() => {
    const data = [];
    let totalSavings = 0;
    let totalInvestment = 0;
    const annualReturn = 0.12;
    for (let y = 0; y <= years; y++) {
      data.push({
        year: `Year ${y}`,
        savings: Math.round(totalSavings),
        investments: Math.round(totalInvestment),
        total: Math.round(totalSavings + totalInvestment),
      });
      totalSavings += (income - expenses - sip) * 12;
      totalInvestment = (totalInvestment + sip * 12) * (1 + annualReturn);
    }
    return data;
  }, [income, expenses, sip, years]);

  const finalData = projectedData[projectedData.length - 1];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-glass p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold font-display text-card-foreground">Future Wealth Simulator</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          {[
            { label: "Monthly Income", value: income, set: setIncome, min: 10000, max: 500000, step: 5000 },
            { label: "Monthly Expenses", value: expenses, set: setExpenses, min: 5000, max: 400000, step: 5000 },
            { label: "Monthly SIP", value: sip, set: setSip, min: 1000, max: 100000, step: 1000 },
            { label: "Investment Period (years)", value: years, set: setYears, min: 1, max: 30, step: 1, isCurrency: false },
          ].map(({ label, value, set, min, max, step, isCurrency }) => (
            <div key={label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-semibold text-card-foreground">
                  {isCurrency === false ? value : `₹${value.toLocaleString()}`}
                </span>
              </div>
              <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => set(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-primary/10 text-center">
              <p className="text-xs text-muted-foreground">Projected Savings</p>
              <p className="text-lg font-bold font-display text-primary">₹{(finalData?.savings / 100000).toFixed(1)}L</p>
            </div>
            <div className="p-3 rounded-lg bg-accent/10 text-center">
              <p className="text-xs text-muted-foreground">Investment Growth</p>
              <p className="text-lg font-bold font-display text-accent">₹{(finalData?.investments / 100000).toFixed(1)}L</p>
            </div>
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectedData}>
              <defs>
                <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160, 60%, 35%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160, 60%, 35%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 90%)" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(200, 10%, 45%)" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(200, 10%, 45%)" }} tickFormatter={(v) => `₹${(v/100000).toFixed(0)}L`} />
              <Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} />
              <Area type="monotone" dataKey="total" stroke="hsl(160, 60%, 35%)" fill="url(#totalGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default WealthSimulator;
