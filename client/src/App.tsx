import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { ThemeProvider } from "./components/layout/theme-toggle";
import { useState, useEffect } from "react";

// Custom hash-based location hook for GitHub Pages
const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const handler = () => {
      setLoc(window.location.hash.replace("#", "") || "/");
    };

    window.addEventListener("hashchange", handler);
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("hashchange", handler);
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [loc, navigate];
};

function RouterConfig() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterConfig />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;