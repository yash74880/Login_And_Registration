import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Secret() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        try {
          const response = await fetch("http://localhost:3000", {
            method: "POST",
            credentials: "include",
          });

          if (!response.ok) {
            setCookie("jwt", "", { maxAge: 0 });
            navigate("/login");
          } else {
            const data = await response.json();
            console.log(`Hi ${data.user} `);
          }
        } catch (error) {
          console.error("Error occurred:", error);
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, setCookie]);

  const logOut = () => {
    setCookie("jwt", "", { maxAge: 0 });
    navigate("/login");
  };

  return (
    <>
      <div className="private">
        <h1>Super Secret Page</h1>
        <button onClick={logOut}>Log out</button>
      </div>
    </>
  );
}
