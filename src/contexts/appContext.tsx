import { IAppProps } from "@utils/typeUtils";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAppContextProps {
  app: IAppProps;
  setApp: Dispatch<SetStateAction<IAppProps>>;
}

const AppContext = createContext<IAppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [app, setApp] = useState<IAppProps>({
    isMobileMenu: false,
    mobileSubData: [],
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Occure error in useApp context");
  }

  return context;
};

export { AppProvider, useApp };
