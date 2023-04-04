import React from "react";
import { User } from "../../interface/user";
import UserCard from "../UserCard/UserCard";
import { initialState } from "../../Redux/Reducer";
import { useSelector } from "react-redux";
import "./UserList.scss";
import useSearchUsers from "../SearchUsers/hooks/useSearchUsers";
import { searchState } from "../../interface/search";

const UserList = ({ searchData }: { searchData: searchState }) => {
  const { users } = useSelector((state: initialState) => state);

  const [filteredList] = useSearchUsers({ ...searchData });

  if (users.length === 0) return <div>No users</div>;

  return (
    <div className="User_list_container">
      {filteredList.map((user: User) => (
        <UserCard userData={user} key={user.email} />
      ))}
    </div>
  );
};

export default UserList;
