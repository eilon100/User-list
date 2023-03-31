import AddUser from "../AddUser/AddUser";
import UserList from "../UserList/UserList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./UserLibrary.scss";
type expectResponse = {
  name: { title: string; first: string; last: string };
  location: {
    country: string;
    city: string;
    street: { name: string; streetNumber: number };
  };
  email: string;
  picture: { medium: string };
};

const UserLibrary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const { results } = await response.json();

      const newResult = results.map(
        ({
          name: { title, first: firstName, last: lastName },
          location: {
            country,
            city,
            street: { name: streetName, streetNumber },
          },
          email,
          picture: { medium: image },
        }: expectResponse) => {
          return {
            name: { title, firstName, lastName },
            email,
            image,
            location: { country, city, streetName },
          };
        }
      );

      dispatch({ type: "SET_STORE", payload: newResult });
    };
    fetchUsers();
  }, []);

  return (
    <div className="Main_container">
      <h1>User List</h1>
      <AddUser />
      <UserList />
    </div>
  );
};

export default UserLibrary;
