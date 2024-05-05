import { Dashboard } from "@/components/dashboard-05";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { TypographyDemo } from "./components/typography-demo";

export default function App() {
  return (
    <TooltipProvider>
      <div>
        {/* <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
        <TypographyDemo />
      </div> */}
        <Dashboard />
      </div>
    </TooltipProvider>
  );
}
