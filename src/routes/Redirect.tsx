import React from "react";
import { Redirect } from "react-router-dom";

/*interface CustomRedirectProps {

}*/

const CustomRedirect: React.FC = () => {
  return (
    <Redirect to="/dashboard" />
  );
};

export default CustomRedirect;