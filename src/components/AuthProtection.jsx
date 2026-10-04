import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthProtection({ children, authentication = true }) {
  const user = useSelector((state) => state.auth.userData);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (authentication && !user) {
      navigate("/login");
    }
    if (!authentication && user) {
      navigate("/");
    }
    setLoader(false);
  }, [navigate, authentication, user]);

  return loader ? <p>Loading...</p> : children;
}

export default AuthProtection;
