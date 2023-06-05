import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function ProfileContainer() {
  const navigate = useNavigate()
  const {data: user} = useUser()
  const logout = () => {
    sessionStorage.setItem('token', null)
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto px-3 py-3 space-y-1">
      <div>hello, {user.name}</div>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  );
}

export default ProfileContainer;
