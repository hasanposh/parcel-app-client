import PropTypes from "prop-types";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [role, isLoading] = useRole();
  if (loading || isLoading) {
    return <LoadingSkeleton />;
  }
  if (user && role === "admin") {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname} replace />;
};

AdminRoute.propTypes = {
  children: PropTypes.any,
};

export default AdminRoute;
