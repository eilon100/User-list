import "./ModalContainer.scss";

import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { Modal } from "@mui/material";
import React from "react";

type ModalContainerProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
  onClick: () => any;
  mainButton: string;
  mainButtonStyle: string;
};

function ModalContainer({
  open,
  onClose,
  children,
  onClick,
  mainButton,
  mainButtonStyle,
}: ModalContainerProps) {
  const cancelButton = (
    <Button
      variant="text"
      type="reset"
      id="Delete_container_cancel_button"
      onClick={onClose}
    >
      cancel
    </Button>
  );

  const submitButton = (
    <Button
      type="submit"
      variant="contained"
      onClick={onClick}
      id={mainButtonStyle}
    >
      {mainButton}
    </Button>
  );

  return (
    <Modal open={Boolean(open)} onClose={onClose} className="modal">
      <div className="content">
        <div className="close" onClick={onClose}>
          <MdClose className="close_icon" />
        </div>
        {children}
        <div className="modal_actions_buttons">
          {cancelButton}
          {submitButton}
        </div>
      </div>
    </Modal>
  );
}

export default ModalContainer;
