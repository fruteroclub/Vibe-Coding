import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import Doc from "./pages/Doc";
import QuickStart from "./pages/doc/QuickStart";
import Glossary from "./pages/doc/Glossary";
import Resources from "./pages/doc/Resources";
import Layers from "./pages/doc/Layers";
import AI from "./pages/doc/AI";
import Sessions from "./pages/doc/Sessions";
import Session1 from "./pages/doc/Session1";
import Session2 from "./pages/doc/Session2";
import Session3 from "./pages/doc/Session3";
import Session4 from "./pages/doc/Session4";
import Session5 from "./pages/doc/Session5";
import Session1Prompt from "./pages/doc/session1/Prompt";
import Session1Deliverable from "./pages/doc/session1/Deliverable";
import Session1Support from "./pages/doc/session1/Support";
import Session1Troubleshooting from "./pages/doc/session1/Troubleshooting";
import Session2Prompt from "./pages/doc/session2/Prompt";
import Session2Deliverable from "./pages/doc/session2/Deliverable";
import Session2Support from "./pages/doc/session2/Support";
import Session2Troubleshooting from "./pages/doc/session2/Troubleshooting";
import Session3Prompt from "./pages/doc/session3/Prompt";
import Session3Deliverable from "./pages/doc/session3/Deliverable";
import Session3Support from "./pages/doc/session3/Support";
import Session3Troubleshooting from "./pages/doc/session3/Troubleshooting";
import Session4Prompt from "./pages/doc/session4/Prompt";
import Session4Deliverable from "./pages/doc/session4/Deliverable";
import Session4Support from "./pages/doc/session4/Support";
import Session4Troubleshooting from "./pages/doc/session4/Troubleshooting";
import Session5Prompt from "./pages/doc/session5/Prompt";
import Session5Deliverable from "./pages/doc/session5/Deliverable";
import Session5Support from "./pages/doc/session5/Support";
import Session5Troubleshooting from "./pages/doc/session5/Troubleshooting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/doc" element={<Doc />} />
            <Route path="/doc/quick-start" element={<QuickStart />} />
            <Route path="/doc/glossary" element={<Glossary />} />
            <Route path="/doc/resources" element={<Resources />} />
            <Route path="/doc/layers" element={<Layers />} />
            <Route path="/doc/ai" element={<AI />} />
            <Route path="/doc/sessions" element={<Sessions />} />
            <Route path="/doc/session-1" element={<Session1 />} />
            <Route path="/doc/session-1/prompt" element={<Session1Prompt />} />
            <Route path="/doc/session-1/deliverable" element={<Session1Deliverable />} />
            <Route path="/doc/session-1/support" element={<Session1Support />} />
            <Route path="/doc/session-1/troubleshooting" element={<Session1Troubleshooting />} />
            <Route path="/doc/session-2" element={<Session2 />} />
            <Route path="/doc/session-2/prompt" element={<Session2Prompt />} />
            <Route path="/doc/session-2/deliverable" element={<Session2Deliverable />} />
            <Route path="/doc/session-2/support" element={<Session2Support />} />
            <Route path="/doc/session-2/troubleshooting" element={<Session2Troubleshooting />} />
            <Route path="/doc/session-3" element={<Session3 />} />
            <Route path="/doc/session-3/prompt" element={<Session3Prompt />} />
            <Route path="/doc/session-3/deliverable" element={<Session3Deliverable />} />
            <Route path="/doc/session-3/support" element={<Session3Support />} />
            <Route path="/doc/session-3/troubleshooting" element={<Session3Troubleshooting />} />
            <Route path="/doc/session-4" element={<Session4 />} />
            <Route path="/doc/session-4/prompt" element={<Session4Prompt />} />
            <Route path="/doc/session-4/deliverable" element={<Session4Deliverable />} />
            <Route path="/doc/session-4/support" element={<Session4Support />} />
            <Route path="/doc/session-4/troubleshooting" element={<Session4Troubleshooting />} />
            <Route path="/doc/session-5" element={<Session5 />} />
            <Route path="/doc/session-5/prompt" element={<Session5Prompt />} />
            <Route path="/doc/session-5/deliverable" element={<Session5Deliverable />} />
            <Route path="/doc/session-5/support" element={<Session5Support />} />
            <Route path="/doc/session-5/troubleshooting" element={<Session5Troubleshooting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
