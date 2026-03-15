import { LayoutDashboard, Brain, Calculator, Shield, Target, Trophy, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

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
  const { user, signOut } = useAuth();

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
      <div className="border-t border-border pt-4 space-y-3">
        <div className="px-3">
          <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
        </div>
        <button
          onClick={signOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
