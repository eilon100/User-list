import React from "react";
import { User } from "../../interface/user";
import UserCard from "../UserCard/UserCard";
import { initialState } from "../../Redux/Reducer";
import { useSelector } from "react-redux";
import "./UserList.scss";
const UserList = () => {
  const { users } = useSelector((state: initialState) => state);

  if (users.length === 0) return <div>No users</div>;

  return (
    <div className="User_list_container">
      {users.map((user: User) => (
        <UserCard userData={user} key={user.email} />
      ))}
    </div>
  );
};

export default UserList;
