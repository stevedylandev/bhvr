import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About bhvr
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern fullstack monorepo showcasing the power of modern web
            technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                </div>
                <CardDescription>
                  Built with Bun and Hono for incredible performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🔒</span>
                  </div>
                  <CardTitle>Type Safe</CardTitle>
                </div>
                <CardDescription>
                  End-to-end type safety with shared types.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎨</span>
                  </div>
                  <CardTitle>Beautiful UI</CardTitle>
                </div>
                <CardDescription>
                  shadcn/ui components with Tailwind CSS.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🛣️</span>
                  </div>
                  <CardTitle>React Router</CardTitle>
                </div>
                <CardDescription>
                  Client-side routing for seamless navigation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Tech Stack Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-primary">Frontend</h3>
                    <Badge variant="outline">React 19</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• React Router for navigation</li>
                    <li>• shadcn/ui components</li>
                    <li>• Tailwind CSS styling</li>
                    <li>• Vite development</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-primary">Backend</h3>
                    <Badge variant="outline">Bun</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Hono web framework</li>
                    <li>• TypeScript type safety</li>
                    <li>• Shared types package</li>
                    <li>• Monorepo architecture</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Ready to explore?</CardTitle>
              <CardDescription>
                Check out the source code and documentation.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://github.com/stevedylandev/bhvr"
                    target="_blank">
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://bhvr.dev" target="_blank">
                    Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
