import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function ProfileContainer() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  const logout = () => {
    sessionStorage.setItem("token", null);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto ">
      <div className="flex items-center ml-7 rounded-lg">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
          alt="User 1"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <p className="ml-3 text-2xl text-start font-semibold">{user.name}</p>
          <Link to="/profile">
            <span className="rounded-xl ml-3 text-red-700 text-sm">
              Edit Profile
            </span>
          </Link>
          <button className="ml-2 text-sm" type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
