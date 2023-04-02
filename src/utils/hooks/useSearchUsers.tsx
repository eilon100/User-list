import { useSelector } from "react-redux";
import { initialState } from "../../Redux/Reducer";

function useSearchUsers({ search: { filter, search } }: any) {
  const { users } = useSelector((state: initialState) => state);
  const filterLocation = filter === "location";
  const filterEmail = filter === "email";
  const filterName = filter === "name";

  const filteredList = users.filter((user) => {
    if (filterLocation)
      Object.values(user.location).some((value) => value.includes(search));

    if (filterName)
      Object.values(user.name).some((value) => value.includes(search));

    if (filterEmail) user.email.includes(search);

    return (
      user.email.includes(search) ||
      Object.values(user.location).some((value) => value.includes(search)) ||
      Object.values(user.name).some((value) => value.includes(search))
    );
  });

  return [filteredList];
}

export default useSearchUsers;
