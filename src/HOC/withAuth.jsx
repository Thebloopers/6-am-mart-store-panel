import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { isAuthenticated } from "../helpers/auth";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [cookies] = useCookies(["store"]);
    const navigate = useNavigate();

    const accessToken = isAuthenticated(cookies);

    useEffect(() => {
      if (!accessToken || accessToken === undefined) {
        navigate("/login"); // Redirect to login if not authenticated
      }
    }, [accessToken, navigate]); // Dependency array ensures useEffect runs if accessToken or navigate changes

    // If not authenticated, we return null since the redirection will be handled by useEffect
    if (!accessToken || accessToken === undefined) {
      return null; // Return null to avoid rendering if there's no token
    }

    return <WrappedComponent {...props} />; // Render the wrapped component if authenticated
  };
};

export default withAuth;