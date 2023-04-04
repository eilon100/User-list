import * as yup from "yup";
import { User } from "../../interface/user";

export const EditUserValidation = (users: User[]) => {
  return yup.object({
    title: yup.string().required("Title is required"),
    firstName: yup
      .string()
      .required("firstName is required")
      .min(3, "firstName must be 3 or more characters"),
    lastName: yup
      .string()
      .required("lastName is required")
      .min(3, "lastName must be 3 or more characters"),
    city: yup.string().required("city is required"),
    country: yup.string().required("country is required"),
    streetName: yup.string().required("streetName is required"),
    email: yup
      .string()
      .required("email is required")
      .email("Enter a valid email")
      .test("uniqueEmail", "please pick unique email", function (value) {
        const result = users.some((user) => user.email === value);
        return !result;
      }),
  });
};
