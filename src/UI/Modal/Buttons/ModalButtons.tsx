import Button from "@mui/material/Button";
import React from "react";

type ModalButtonProps = {
  onClose: () => void;
  submitFunction?: () => void;
  buttonText: { mainButton: string; secondaryButton: string };
};
function ModalButtons({
  onClose,
  submitFunction,
  buttonText: { mainButton = "Save", secondaryButton = "Cancel" },
}: ModalButtonProps) {
  return (
    <div className="Delete_container_button">
      <Button
        variant="text"
        type="reset"
        id="Delete_container_cancel_button"
        onClick={onClose}
      >
        {secondaryButton}
      </Button>
      <Button
        type="submit"
        variant="contained"
        id="Delete_container_save_button"
        onClick={submitFunction}
      >
        {mainButton}
      </Button>
    </div>
  );
}

export default ModalButtons;
