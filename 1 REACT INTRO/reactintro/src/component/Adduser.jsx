import { useEffect, useState } from "react";
import Card from "./ContactList";

const Adduser = () => {
  const [users, setusers] = useState([]);

  console.log(users);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let data = await (await fetch("http://localhost:8080/data")).json();
    setusers(data);
  };

  return (
    <div>
      <div style={{ marginLeft: "30%",}}>
        {users.map((e) => (
          <Card user={e} />
        ))}
      </div>
    </div>
  );
};

export default Adduser;
