import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import PdfToWord from "./pages/conversion-tools/PdfToWord";
import Mp3ToWav from "./pages/conversion-tools/Mp3ToWav";
import ImageToText from "./pages/conversion-tools/ImageToText";
import TextSummarizer from "./pages/conversion-tools/TextSummarizer";
import PngToJpg from "./pages/conversion-tools/PngToJpg";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          
          {/* Protected routes */}
          <Route path="/tools" element={<ProtectedRoute><Tools /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          
          {/* Protected tool routes */}
          <Route path="/tools/pdf-to-word" element={<ProtectedRoute><PdfToWord /></ProtectedRoute>} />
          <Route path="/tools/mp3-to-wav" element={<ProtectedRoute><Mp3ToWav /></ProtectedRoute>} />
          <Route path="/tools/image-to-text" element={<ProtectedRoute><ImageToText /></ProtectedRoute>} />
          <Route path="/tools/text-summarizer" element={<ProtectedRoute><TextSummarizer /></ProtectedRoute>} />
          <Route path="/tools/png-to-jpg" element={<ProtectedRoute><PngToJpg /></ProtectedRoute>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
