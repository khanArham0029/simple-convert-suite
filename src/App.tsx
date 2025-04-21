import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Pricing from "./pages/Pricing";
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

// Other tool pages placeholders - will be similar to PdfToWord
const Mp3ToWavPage = () => <div>MP3 to WAV Conversion Tool</div>;
const ImageToTextPage = () => <div>Image to Text Conversion Tool</div>;
const TextSummarizerPage = () => <div>Text Summarizer Tool</div>;
const PngToJpgPage = () => <div>PNG to JPG Conversion Tool</div>;

// Placeholder auth check - to be implemented with Supabase
const isAuthenticated = false;

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

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
          <Route path="/tools" element={<Tools />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          
          {/* Tool routes */}
          <Route path="/tools/pdf-to-word" element={<PdfToWord />} />
          <Route path="/tools/mp3-to-wav" element={<Mp3ToWav />} />
          <Route path="/tools/image-to-text" element={<ImageToText />} />
          <Route path="/tools/text-summarizer" element={<TextSummarizer />} />
          <Route path="/tools/png-to-jpg" element={<PngToJpg />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
