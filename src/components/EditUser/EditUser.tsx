import { Actions } from "../../interface/actions";
import "./EditUSer.scss";

type DeleteUserProps = {
  textField: () => JSX.Element;
  action: Actions;
};

function EditUser({ textField, action }: DeleteUserProps) {
  return (
    <form className="Edit_user_form">
      <h1>{action} User</h1>
      {textField()}
    </form>
  );
}

export default EditUser;
