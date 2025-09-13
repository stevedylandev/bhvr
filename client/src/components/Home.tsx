import { useState } from "react";
import beaver from "@/assets/beaver.svg";
import { ApiResponse } from "shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

function Home() {
  const [data, setData] = useState<ApiResponse | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  async function sendRequest() {
    setIsLoading(true);
    try {
      const req = await fetch(`${SERVER_URL}/hello`);
      const res: ApiResponse = await req.json();
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center">
            <a
              href="https://github.com/stevedylandev/bhvr"
              target="_blank"
              className="group transition-transform hover:scale-110">
              <div className="relative">
                <img
                  src={beaver}
                  className="w-20 h-20 drop-shadow-lg"
                  alt="beaver logo"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-black bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              bhvr
            </h1>
            <h2 className="text-3xl font-bold text-foreground">
              Bun + Hono + Vite + React
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern, typesafe fullstack monorepo with shadcn/ui components
              and Tailwind CSS
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="default">Bun</Badge>
              <Badge variant="secondary">Hono</Badge>
              <Badge variant="outline">Vite</Badge>
              <Badge variant="default">React</Badge>
              <Badge variant="secondary">React Router</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="default">shadcn/ui</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={sendRequest}
              size="lg"
              className="min-w-[140px]"
              disabled={isLoading}>
              {isLoading ? "Loading..." : "Call API"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="min-w-[140px]">
              <a target="_blank" href="https://bhvr.dev">
                View Docs
              </a>
            </Button>
          </div>
        </div>

        {/* API Response */}
        {data && (
          <>
            <div className="max-w-xl mx-auto">
              <Alert className="mb-4">
                <AlertTitle>API Response Received!</AlertTitle>
                <AlertDescription>
                  Successfully connected to the backend server.
                </AlertDescription>
              </Alert>

              <Card>
                <CardContent className="pt-6">
                  <div className="bg-muted rounded-md p-4 font-mono text-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Message:</span>
                      <Badge variant="outline">{data.message}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Success:</span>
                      <Badge variant={data.success ? "default" : "destructive"}>
                        {data.success ? "✓ Success" : "✗ Failed"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Separator className="my-8" />
          </>
        )}

        {/* Tech Stack Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">⚡</span>
              </div>
              <CardTitle className="text-lg">Bun</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center">
                Fast JavaScript runtime
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">🚀</span>
              </div>
              <CardTitle className="text-lg">Hono</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center">
                Lightweight web framework
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">⚛️</span>
              </div>
              <CardTitle className="text-lg">React</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center">
                Modern UI library
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">🛣️</span>
              </div>
              <CardTitle className="text-lg">React Router</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center">
                Client-side routing
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Features Alert */}
        <div className="max-w-xl mx-auto mt-8">
          <Alert>
            <AlertTitle>🚀 Modern Web Development</AlertTitle>
            <AlertDescription>
              Fullstack TypeScript monorepo with shadcn/ui components and Bun
              runtime.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default Home;
