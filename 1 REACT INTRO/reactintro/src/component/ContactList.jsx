import { useState } from "react";
import styled from "styled-components";

const Cardone = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 20px;
  border: 5px solid paleturquoise;
  margin: 15px;
  background-color: white;
`;

const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 120px;
`;

function Card(user) {
  const [show, setshow] = useState(false);
  const shownumber = () => {
    setshow(!show);
  };

  return (
    <Cardone onClick={shownumber}>
      <Image src={user.user.avatar} alt="img" />
      <div>
        <h2>
          {user.user.first_name} {user.user.last_name}
        </h2>
        <p>{user.user.email}</p>
        {show ? (
          <div>
            <h4>{user.user.contact}</h4>
          </div>
        ) : null}
      </div>

      <br />
    </Cardone>
  );
}

export default Card;
