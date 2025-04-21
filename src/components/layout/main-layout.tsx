
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  // This is a placeholder for authentication status
  const isAuthenticated = false;

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">Convertify</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/tools" className="text-sm font-medium transition-colors hover:text-primary">
              Tools
            </Link>
            <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">Dashboard</Button>
                </Link>
                <Button variant="ghost" size="sm">Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative size-6 overflow-hidden bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="font-bold text-lg">Convertify</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Simple file conversion tools for everyone
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 Convertify. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
