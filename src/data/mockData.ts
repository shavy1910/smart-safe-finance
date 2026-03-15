export const userData = {
  name: "Arjun Mehta",
  income: 125000,
  expenses: 72000,
  savings: 53000,
  investments: 450000,
  netWorth: 2850000,
  netWorthChange: 8.5,
  savingsRate: 42.4,
  creditScore: 782,
};

export const monthlyData = [
  { month: "Jan", income: 125000, expenses: 68000, savings: 57000 },
  { month: "Feb", income: 125000, expenses: 71000, savings: 54000 },
  { month: "Mar", income: 125000, expenses: 75000, savings: 50000 },
  { month: "Apr", income: 130000, expenses: 69000, savings: 61000 },
  { month: "May", income: 130000, expenses: 73000, savings: 57000 },
  { month: "Jun", income: 125000, expenses: 72000, savings: 53000 },
];

export const spendingCategories = [
  { name: "Housing", value: 25000, color: "hsl(160, 60%, 35%)" },
  { name: "Food", value: 12000, color: "hsl(42, 90%, 55%)" },
  { name: "Transport", value: 8000, color: "hsl(210, 80%, 55%)" },
  { name: "Entertainment", value: 9500, color: "hsl(340, 65%, 55%)" },
  { name: "Shopping", value: 7500, color: "hsl(280, 60%, 55%)" },
  { name: "Utilities", value: 5000, color: "hsl(20, 70%, 55%)" },
  { name: "Health", value: 5000, color: "hsl(145, 65%, 42%)" },
];

export const wealthGrowth = [
  { month: "Jan", wealth: 2650000 },
  { month: "Feb", wealth: 2700000 },
  { month: "Mar", wealth: 2720000 },
  { month: "Apr", wealth: 2780000 },
  { month: "May", wealth: 2820000 },
  { month: "Jun", wealth: 2850000 },
];

export const assets = [
  { name: "Property (Apartment)", value: 1800000, type: "property" },
  { name: "Mutual Funds", value: 320000, type: "investment" },
  { name: "Stocks Portfolio", value: 130000, type: "investment" },
  { name: "Gold (Physical)", value: 180000, type: "gold" },
  { name: "Fixed Deposits", value: 250000, type: "savings" },
  { name: "Car", value: 170000, type: "vehicle" },
];

export const recommendations = [
  {
    id: 1,
    title: "Increase SIP by ₹5,000",
    description: "Your income has grown 4% this quarter. Consider increasing your monthly SIP from ₹15,000 to ₹20,000 to accelerate wealth growth.",
    category: "investment",
    impact: "high",
  },
  {
    id: 2,
    title: "Reduce Entertainment Spending",
    description: "Entertainment spending is 30% above your 3-month average. Cutting back ₹3,000/month could save ₹36,000 annually.",
    category: "budget",
    impact: "medium",
  },
  {
    id: 3,
    title: "Tax-Saving ELSS Investment",
    description: "You have ₹50,000 remaining under Section 80C. Invest in ELSS funds to save up to ₹15,600 in taxes.",
    category: "tax",
    impact: "high",
  },
  {
    id: 4,
    title: "Build Emergency Fund",
    description: "Your emergency fund covers 3 months of expenses. Aim for 6 months (₹4,32,000) for better financial security.",
    category: "savings",
    impact: "medium",
  },
];

export const goals = [
  { id: 1, name: "Buy a House", target: 5000000, current: 2100000, deadline: "2027", icon: "🏠" },
  { id: 2, name: "Retirement Fund", target: 20000000, current: 4500000, deadline: "2045", icon: "🏖️" },
  { id: 3, name: "Child Education", target: 3000000, current: 800000, deadline: "2035", icon: "🎓" },
  { id: 4, name: "Emergency Fund", target: 432000, current: 320000, deadline: "2025", icon: "🛡️" },
];

export const overspendingAlerts = [
  { category: "Entertainment", increase: 30, amount: 9500, average: 7300 },
  { category: "Shopping", increase: 18, amount: 7500, average: 6350 },
];

export const achievements = [
  { name: "Savings Streak", description: "Saved consistently for 6 months", icon: "🔥", unlocked: true },
  { name: "First SIP", description: "Started your first SIP investment", icon: "📈", unlocked: true },
  { name: "Budget Master", description: "Stayed under budget for 3 months", icon: "🎯", unlocked: true },
  { name: "Net Worth ₹30L", description: "Reach ₹30 lakh net worth", icon: "💎", unlocked: false },
  { name: "Tax Saver", description: "Maximize Section 80C deductions", icon: "📋", unlocked: false },
];
