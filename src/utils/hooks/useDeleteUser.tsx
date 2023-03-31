import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

type useDeleteUserProps = { id: string; onClose: () => void };

function useDeleteUser({ id, onClose }: useDeleteUserProps) {
  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch({ type: "DELETE_USER", payload: id });
    toast.success("User deleted");
    onClose();
  };
  return { deleteUser };
}

export default useDeleteUser;
