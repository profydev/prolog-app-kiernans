import React, { useState } from "react";

type IssuesContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isAllChecked: false,
  isSomeChecked: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAllChecked: (newIsAllChecked: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSomeChecked: (newIsSomeChecked: boolean) => {},
};

export const IssuesContext = React.createContext(defaultContext);

export const IssuesProvider = ({ children }: IssuesContextProviderProps) => {
  const [isAllChecked, setIsAllChecked] = useState(defaultContext.isAllChecked);
  const [isSomeChecked, setIsSomeChecked] = useState(
    defaultContext.isSomeChecked
  );

  return (
    <IssuesContext.Provider
      value={{
        isAllChecked,
        isSomeChecked,
        setAllChecked: (newIsAllChecked) => setIsAllChecked(newIsAllChecked),
        setSomeChecked: (newIsSomeChecked) =>
          setIsSomeChecked(newIsSomeChecked),
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};
