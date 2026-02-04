import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eager load - critical for LCP
import Index from "./pages/Index";

// Lazy load - all other routes
const Demo = lazy(() => import("./pages/Demo"));
const Doc = lazy(() => import("./pages/Doc"));
const QuickStart = lazy(() => import("./pages/doc/QuickStart"));
const Glossary = lazy(() => import("./pages/doc/Glossary"));
const Resources = lazy(() => import("./pages/doc/Resources"));
const Layers = lazy(() => import("./pages/doc/Layers"));
const AI = lazy(() => import("./pages/doc/AI"));
const Sessions = lazy(() => import("./pages/doc/Sessions"));
const Session1 = lazy(() => import("./pages/doc/Session1"));
const Session2 = lazy(() => import("./pages/doc/Session2"));
const Session3 = lazy(() => import("./pages/doc/Session3"));
const Session4 = lazy(() => import("./pages/doc/Session4"));
const Session5 = lazy(() => import("./pages/doc/Session5"));
const Session1Prompt = lazy(() => import("./pages/doc/session1/Prompt"));
const Session1Deliverable = lazy(() => import("./pages/doc/session1/Deliverable"));
const Session1Support = lazy(() => import("./pages/doc/session1/Support"));
const Session1Troubleshooting = lazy(() => import("./pages/doc/session1/Troubleshooting"));
const Session2Prompt = lazy(() => import("./pages/doc/session2/Prompt"));
const Session2Deliverable = lazy(() => import("./pages/doc/session2/Deliverable"));
const Session2Support = lazy(() => import("./pages/doc/session2/Support"));
const Session2Troubleshooting = lazy(() => import("./pages/doc/session2/Troubleshooting"));
const Session3Prompt = lazy(() => import("./pages/doc/session3/Prompt"));
const Session3Deliverable = lazy(() => import("./pages/doc/session3/Deliverable"));
const Session3Support = lazy(() => import("./pages/doc/session3/Support"));
const Session3Troubleshooting = lazy(() => import("./pages/doc/session3/Troubleshooting"));
const Session4Prompt = lazy(() => import("./pages/doc/session4/Prompt"));
const Session4Deliverable = lazy(() => import("./pages/doc/session4/Deliverable"));
const Session4Support = lazy(() => import("./pages/doc/session4/Support"));
const Session4Troubleshooting = lazy(() => import("./pages/doc/session4/Troubleshooting"));
const Session5Prompt = lazy(() => import("./pages/doc/session5/Prompt"));
const Session5Deliverable = lazy(() => import("./pages/doc/session5/Deliverable"));
const Session5Support = lazy(() => import("./pages/doc/session5/Support"));
const Session5Troubleshooting = lazy(() => import("./pages/doc/session5/Troubleshooting"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
