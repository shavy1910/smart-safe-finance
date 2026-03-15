import { LayoutDashboard, Brain, Calculator, Shield, Target, Trophy } from "lucide-react";

interface MobileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Home" },
  { id: "advisor", icon: Brain, label: "Advisor" },
  { id: "simulator", icon: Calculator, label: "Simulate" },
  { id: "fraud", icon: Shield, label: "Protect" },
  { id: "goals", icon: Target, label: "Goals" },
];

const MobileNav = ({ activeSection, onSectionChange }: MobileNavProps) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border flex justify-around py-2 px-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileNav;
