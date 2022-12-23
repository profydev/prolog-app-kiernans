import React, { useState } from "react";

type IssuesContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isAllChecked: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleAllChecked: () => {},
};

export const IssuesContext = React.createContext(defaultContext);

export const IssuesProvider = ({ children }: IssuesContextProviderProps) => {
  const [isAllChecked, setIsAllChecked] = useState(defaultContext.isAllChecked);

  return (
    <IssuesContext.Provider
      value={{
        isAllChecked,
        toggleAllChecked: () =>
          setIsAllChecked((isAllChecked) => !isAllChecked),
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};
