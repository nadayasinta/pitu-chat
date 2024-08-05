import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/Auth";

const ProtectedPage = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedPage;
