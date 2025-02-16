import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  useEffect(() => {
    if (!token) {
      // If token does not exist, navigate to "/"
      navigate("/");
    }
    // Note: If token exists, the useEffect does nothing, which is fine here
  }, [token, navigate]); // Ensure useEffect runs when token or navigate changes

  // Always render children regardless of token existence
  return <>{children}</>;
};

export default AdminProtected;
