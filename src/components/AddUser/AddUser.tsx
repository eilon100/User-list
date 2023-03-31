import React, { useState } from "react";

import { Button } from "@mui/material";
import EditUser from "../EditUser/EditUser";
import ModalContainer from "../../UI/Modal/Container/ModalContainer";
import useUserDate from "../../utils/hooks/useUserData";

function AddUser() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onClose = () => setIsModalOpen(false);

  const { editUser, textField } = useUserDate({
    onClose,
    action: "add",
  });

  return (
    <div>
      <ModalContainer
        open={isModalOpen}
        onClose={onClose}
        onClick={editUser}
        mainButton="Add"
        mainButtonStyle="modal_container_edit_button"
      >
        <EditUser textField={textField} action="add" />
      </ModalContainer>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        add user
      </Button>
    </div>
  );
}

export default AddUser;
