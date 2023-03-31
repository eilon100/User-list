import "./DeleteUser.scss";

import { MdOutlineDeleteOutline } from "react-icons/md";

function DeleteUser() {
  return (
    <div className="Delete_user_container">
      <div className="Delete_user_header">
        <MdOutlineDeleteOutline className="Delete_user_icon" />
        <h1>You are about to delete this user</h1>
        <div className="Delete_user_paragraph ">
          <p>This will delete your user from the user list</p>
          <p>Are you sure?</p>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;
