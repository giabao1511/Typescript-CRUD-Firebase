import { useEffect, useState } from "react";

type userProp = {
  name: string;
  location: string;
};

const Test = () => {
  const [user, setUser] = useState<null | userProp>(null);

  const handleLogin = () => {
    setUser({
      name: "gia bao",
      location: "HCM",
    });
  };

  useEffect(() => {
    
  }, []);

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <div>{user?.name}</div>
    </>
  );
};

export default Test;
