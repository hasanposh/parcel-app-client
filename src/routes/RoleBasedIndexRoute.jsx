import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRole from "@/hooks/useRole";

const RoleBasedIndexRoute = () => {
  const navigate = useNavigate();
  const [role] = useRole();

  useEffect(() => {
    if (role === "admin") {
      navigate("/dashboard/statistics", { replace: true });
    } else if (role === "user") {
      navigate("/dashboard/userProfile", { replace: true });
    } else if (role === "delivery man") {
      navigate("/dashboard/myDeliveryList", { replace: true });
    }
  }, [role, navigate]);

  return null;
};

export default RoleBasedIndexRoute;
