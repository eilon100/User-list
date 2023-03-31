import { Reducer } from "redux";
import { User } from "../interface/user";

export interface initialState {
  users: User[];
}
type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "DELETE_USER"; payload: string }
  | { type: "EDIT_USER"; payload: { id: string; values: {} } }
  | { type: "SET_STORE"; payload: User[] };

export const userReducer: Reducer<initialState, UserAction> = (
  state: initialState = { users: [] },
  action: UserAction
): initialState => {
  switch (action.type) {
    case "SET_STORE":
      return { ...state, users: [...action.payload] };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.email !== action.payload;
        }),
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.id
            ? { ...user, ...action.payload.values }
            : user
        ),
      };
    default:
      return state;
  }
};
