import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Protected = () => {
  const isLoggedIn = useLogin();

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
