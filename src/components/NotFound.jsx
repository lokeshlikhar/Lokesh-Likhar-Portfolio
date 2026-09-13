import { AlertCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <AlertCircle className="error-icon" />
        <h1>Page Not Found</h1>
        <p className="body-copy">
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or return to the homepage.
        </p>
        <Link to="/" className="button button-primary">
          <Home />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
