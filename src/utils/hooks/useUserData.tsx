import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@mui/material";
import { actions } from "../../interface/actions";
import { initialState } from "../../Redux/Reducer";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useState } from "react";
import { EditUserValidation } from "../validation/EditUserValidation";

type initialValues = {
  [key: string]: string;
};

const textFields = [
  { name: "email", type: "email", label: "email" },
  { name: "title", type: "string", label: "title" },
  { name: "firstName", type: "text", label: "first name" },
  { name: "lastName", type: "text", label: "last name" },
  { name: "city", type: "text", label: "city" },
  { name: "country", type: "text", label: "country" },
  { name: "streetName", type: "string", label: "streetName" },
];

type useEditUserProps = {
  id?: string;
  onClose: () => void;
  action: actions;
};

function useUserDate({ id, onClose, action }: useEditUserProps) {
  const { users } = useSelector((state: initialState) => state);
  const dispatch = useDispatch();
  const actionIsAdd = action === "add";
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleImageUpload = (event: any) => {
    const file = event.target.files?.[0];
    setUserImage(file ? URL.createObjectURL(file) : null);
  };

  const initialValues = textFields.reduce((acc: initialValues, { name }) => {
    acc[name] = "";
    return acc;
  }, {});

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues,

    validationSchema: EditUserValidation(users),

    onSubmit: () => {
      submitFunction();
    },
  });

  const textField = () => {
    return (
      <>
        {textFields.map(({ name, type, label }) => {
          return (
            <TextField
              className="Edit_user_textfield"
              key={name}
              id={name}
              label={label}
              type={type}
              name={name}
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[name]}
              error={touched[name] && Boolean(errors[name])}
              helperText={touched[name] && errors[name]}
            />
          );
        })}
        {actionIsAdd ? (
          <div>
            Image{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
        ) : null}
      </>
    );
  };

  const submitFunction = () => {
    
    const userValues = {
      email: values.email,
      name: {
        firstName: values.firstName,
        lastName: values.lastName,
        title: values.title,
      },
      location: {
        country: values.country,
        city: values.city,
        streetName: values.streetName,
      },
      ...(actionIsAdd && {
        image: userImage,
      }),
    };

    const dispatchFunction = () => {
      if (actionIsAdd) {
        return dispatch({ type: "ADD_USER", payload: userValues });
      }
      return dispatch({
        type: "EDIT_USER",
        payload: { id, values: userValues },
      });
    };

    dispatchFunction();
    toast.success(`${actionIsAdd ? "User added" : "User edited"}`);
    resetForm();
    onClose();
  };

  return { editUser: handleSubmit, textField };
}

export default useUserDate;
