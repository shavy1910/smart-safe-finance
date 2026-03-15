import { LayoutDashboard, Brain, Calculator, Shield, Target, Trophy } from "lucide-react";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "advisor", label: "AI Advisor", icon: Brain },
  { id: "simulator", label: "Wealth Simulator", icon: Calculator },
  { id: "fraud", label: "Fraud Protection", icon: Shield },
  { id: "goals", label: "Goals", icon: Target },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

const AppSidebar = ({ activeSection, onSectionChange }: AppSidebarProps) => {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card p-4 min-h-screen">
      <div className="mb-8">
        <h1 className="text-xl font-bold font-display text-gradient-primary">SecureWealth</h1>
        <p className="text-xs text-muted-foreground">AI Financial Twin</p>
      </div>
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-card-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default AppSidebar;
