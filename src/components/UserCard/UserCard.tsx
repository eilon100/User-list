import DeleteUser from "../DeleteUser/DeleteUser";
import EditUser from "../EditUser/EditUser";
import ModalContainer from "../../UI/Modal/Container/ModalContainer";
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
      mainButtonStyle="modal_container_edit_button"
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
      mainButtonStyle="modal_container_delete_button"
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

  const openModalFunction = (action: actions) => {
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
            <MdEmail />
            {email}
          </div>
          <div>
            <MdLocationOn />
            {country}
          </div>
          <div>
            <MdOutlineLocationCity />
            {city}
          </div>
          <div>
            <MdHome />
            {streetName}
          </div>
        </div>
        <div className="User_card_buttons">
          <Button
            variant="contained"
            id="User_card_edit_button"
            onClick={() => openModalFunction(EDIT)}
          >
            edit
          </Button>
          <Button
            variant="contained"
            id="User_card_delete_button"
            onClick={() => openModalFunction(DELETE)}
          >
            delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserCard;
