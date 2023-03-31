import "./EditUSer.scss";

import { actions } from "../../interface/actions";

type DeleteUserProps = {
  textField: () => JSX.Element;
  action: actions;
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
