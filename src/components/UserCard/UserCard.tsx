import DeleteUser from "../DeleteUser/DeleteUser";
import EditUser from "../EditUser/EditUser";
import ModalContainer from "../../UI/Modal/ModalContainer";
import { User } from "../../interface/user";
import useDeleteUser from "../../utils/hooks/useDeleteUser";
import { useState } from "react";
import useUserDate from "../../utils/hooks/useUserData";
import "./UserCard.scss";
import {
  MdEmail,
  MdLocationOn,
  MdHome,
  MdOutlineLocationCity,
} from "react-icons/md";
import { Button } from "@mui/material";
const defaultImage = require("../../utils/images/emptyProfile.png");
type actions = "edit" | "delete";

const EDIT = "edit";
const DELETE = "delete";

function UserCard({
  userData: {
    name: { title, firstName, lastName },
    email,
    image,
    location: { country, city, streetName },
  },
}: {
  userData: User;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<actions>();

  const onClose = () => setIsModalOpen(false);

  const { deleteUser } = useDeleteUser({ id: email, onClose });
  const { editUser, textField } = useUserDate({
    id: email,
    onClose,
    action: EDIT,
  });

  const editModal = (
    <ModalContainer
      open={isModalOpen}
      onClose={onClose}
      onClick={editUser}
      mainButton="Edit"
      mainButtonStyle="Modal_add_button"
    >
      <EditUser textField={textField} action={EDIT} />
    </ModalContainer>
  );

  const deleteModal = (
    <ModalContainer
      open={isModalOpen}
      onClose={onClose}
      onClick={deleteUser}
      mainButton="Delete"
      mainButtonStyle="Modal_delete_button"
    >
      <DeleteUser />
    </ModalContainer>
  );

  const getModalToDisplay = () => {
    if (buttonPressed === EDIT) {
      return editModal;
    }

    return deleteModal;
  };

  const openModal = (action: actions) => {
    setButtonPressed(action);
    setIsModalOpen(true);
  };

  return (
    <>
      {getModalToDisplay()}
      <div className="User_card">
        <div className="User_card_header">
          <img src={image ? image : defaultImage} />
          <h1>
            {firstName} {lastName}
          </h1>
        </div>
        <div className="User_card_body">
          <div>
            <MdEmail className="User_card_icon" />
            <p>{email}</p>
          </div>
          <div>
            <MdLocationOn className="User_card_icon" />
            <p> {country}</p>
          </div>
          <div>
            <MdOutlineLocationCity className="User_card_icon" />
            <p>{city}</p>
          </div>
          <div>
            <MdHome className="User_card_icon" />
            <p>{streetName}</p>
          </div>
        </div>
        <div className="User_card_buttons">
          <Button
            variant="contained"
            id="User_card_edit_button"
            onClick={() => openModal(EDIT)}
          >
            edit
          </Button>
          <Button
            variant="contained"
            id="User_card_delete_button"
            onClick={() => openModal(DELETE)}
          >
            delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserCard;
