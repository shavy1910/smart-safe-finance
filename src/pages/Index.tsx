import { useState } from "react";
import { Wallet, TrendingUp, PiggyBank, DollarSign, CreditCard, IndianRupee } from "lucide-react";
import { userData, recommendations } from "@/data/mockData";
import StatCard from "@/components/dashboard/StatCard";
import SpendingChart from "@/components/dashboard/SpendingChart";
import WealthChart from "@/components/dashboard/WealthChart";
import AssetsTable from "@/components/dashboard/AssetsTable";
import RecommendationCard from "@/components/advisor/RecommendationCard";
import FraudPanel from "@/components/fraud/FraudPanel";
import WealthSimulator from "@/components/simulator/WealthSimulator";
import GoalTracker from "@/components/goals/GoalTracker";
import OverspendingAlerts from "@/components/alerts/OverspendingAlerts";
import AchievementsPanel from "@/components/achievements/AchievementsPanel";
import ChatAssistant from "@/components/chat/ChatAssistant";
import AppSidebar from "@/components/layout/AppSidebar";
import MobileNav from "@/components/layout/MobileNav";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-display text-foreground">
                {activeSection === "dashboard" && "Financial Dashboard"}
                {activeSection === "advisor" && "AI Financial Advisor"}
                {activeSection === "simulator" && "Wealth Simulator"}
                {activeSection === "fraud" && "Fraud Protection"}
                {activeSection === "goals" && "Goal Planning"}
                {activeSection === "achievements" && "Achievements"}
              </h1>
              <p className="text-sm text-muted-foreground">Welcome back, {userData.name}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium text-success">Protected</span>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {activeSection === "dashboard" && (
            <>
              <OverspendingAlerts />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Net Worth" value={`₹${(userData.netWorth / 100000).toFixed(1)}L`} change={`+${userData.netWorthChange}% this year`} changeType="positive" icon={IndianRupee} delay={0} />
                <StatCard title="Monthly Income" value={`₹${(userData.income / 1000).toFixed(0)}K`} icon={Wallet} delay={0.1} />
                <StatCard title="Monthly Expenses" value={`₹${(userData.expenses / 1000).toFixed(0)}K`} change="Within budget" changeType="positive" icon={CreditCard} delay={0.2} />
                <StatCard title="Savings Rate" value={`${userData.savingsRate}%`} change="Above target (30%)" changeType="positive" icon={PiggyBank} delay={0.3} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WealthChart />
                <SpendingChart />
              </div>
              <AssetsTable />
            </>
          )}

          {activeSection === "advisor" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Personalized recommendations based on your financial data.</p>
              {recommendations.map((rec, i) => (
                <RecommendationCard key={rec.id} {...rec} delay={0.1 * i} />
              ))}
            </div>
          )}

          {activeSection === "simulator" && <WealthSimulator />}
          {activeSection === "fraud" && <FraudPanel />}
          {activeSection === "goals" && <GoalTracker />}
          {activeSection === "achievements" && <AchievementsPanel />}
        </div>
      </main>
      <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />
      <ChatAssistant />
    </div>
  );
};

export default Index;
