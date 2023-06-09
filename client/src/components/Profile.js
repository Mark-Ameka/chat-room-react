import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./../hooks/useUser";

function Profile() {
  const { data: user } = useUser();
  return (
    <div className="max-w-md mx-auto">
      <div>{user.name}</div>
      <Link to="/home">
        <button>Return</button>
      </Link>
    </div>
  );
}

export default Profile;
