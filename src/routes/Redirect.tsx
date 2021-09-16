import React from "react";
import { Redirect } from "react-router-dom";

interface CustomRedirectProps {

}

const CustomRedirect: React.FC<CustomRedirectProps> = () => {
  return (
    <Redirect to="/dashboard" />
  );
};

export default CustomRedirect;