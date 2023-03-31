import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { userReducer } from "./Reducer";
interface AuthProps {
  children: React.ReactNode;
}

export const store: Store = createStore(userReducer);

export const ReduxProvider = ({ children }: AuthProps) => {
  return <Provider store={store}>{children}</Provider>;
};
