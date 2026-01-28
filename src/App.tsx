import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doc from "./pages/Doc";
import QuickStart from "./pages/doc/QuickStart";
import Resources from "./pages/doc/Resources";
import Layers from "./pages/doc/Layers";
import AI from "./pages/doc/AI";
import Session1 from "./pages/doc/Session1";
import Session2 from "./pages/doc/Session2";
import Session3 from "./pages/doc/Session3";
import Session4 from "./pages/doc/Session4";
import Session5 from "./pages/doc/Session5";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/doc/quick-start" element={<QuickStart />} />
          <Route path="/doc/resources" element={<Resources />} />
          <Route path="/doc/layers" element={<Layers />} />
          <Route path="/doc/ai" element={<AI />} />
          <Route path="/doc/session-1" element={<Session1 />} />
          <Route path="/doc/session-2" element={<Session2 />} />
          <Route path="/doc/session-3" element={<Session3 />} />
          <Route path="/doc/session-4" element={<Session4 />} />
          <Route path="/doc/session-5" element={<Session5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
