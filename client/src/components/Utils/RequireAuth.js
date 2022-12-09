import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = (props) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/"></Navigate>;
  }
  if (JSON.parse(auth.getUser()).role == "client") {
    return <Navigate to="/"></Navigate>;
  }
  return props.children;
};
