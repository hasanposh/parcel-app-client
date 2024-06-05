import PropTypes from "prop-types";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <LoadingSkeleton />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
