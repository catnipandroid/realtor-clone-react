import { Navigate, Outlet } from "react-router";
import UseAuthStatus from "../hooks/UseAuthStatus";
import Spinner from "./Spinner";

export default function privateRoute() {
  const { loggedIn, checkingStatus } = UseAuthStatus();
  if (checkingStatus) {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
}
