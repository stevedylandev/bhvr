import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  B
                </span>
              </div>
              <span className="font-bold text-xl">bhvr</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              asChild
              size="sm">
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={location.pathname === "/about" ? "default" : "ghost"}
              asChild
              size="sm">
              <Link to="/about">About</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
