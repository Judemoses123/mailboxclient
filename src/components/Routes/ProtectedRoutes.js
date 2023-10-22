import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={"/account"} />;
};

export default ProtectedRoutes;