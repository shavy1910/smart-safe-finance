import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import RiskGauge from "./RiskGauge";
import { Shield, Smartphone, Zap, Key, AlertTriangle } from "lucide-react";

const riskSignals = [
  { id: "device", label: "New device login", points: 20, icon: Smartphone, active: false },
  { id: "amount", label: "Large transaction amount", points: 30, icon: AlertTriangle, active: true },
  { id: "fast", label: "Fast action after login", points: 15, icon: Zap, active: false },
  { id: "otp", label: "Multiple OTP attempts", points: 20, icon: Key, active: false },
];

const FraudPanel = () => {
  const [signals, setSignals] = useState(riskSignals);

  const score = useMemo(() => signals.reduce((s, sig) => s + (sig.active ? sig.points : 0), 0), [signals]);

  const toggleSignal = (id: string) => {
    setSignals((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-glass p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold font-display text-card-foreground">Wealth Protection Risk Score</h3>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <RiskGauge score={score} />
        <div className="flex-1 space-y-3 w-full">
          <p className="text-sm font-medium text-muted-foreground mb-3">Toggle risk signals to simulate:</p>
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <button
                key={signal.id}
                onClick={() => toggleSignal(signal.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                  signal.active ? "border-destructive/30 bg-destructive/5" : "border-border bg-muted/30 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${signal.active ? "text-destructive" : "text-muted-foreground"}`} />
                  <span className={`text-sm font-medium ${signal.active ? "text-card-foreground" : "text-muted-foreground"}`}>{signal.label}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${signal.active ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}>
                  +{signal.points}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FraudPanel;
