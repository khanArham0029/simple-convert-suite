import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-300px)] text-center px-4">
        <div className="space-y-6">
          <div className="relative">
            <div className="text-9xl font-bold text-primary/10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold">Page Not Found</h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-lg">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
