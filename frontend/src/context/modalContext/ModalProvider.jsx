import React, { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({children}) => {
     const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={{isAuthModalOpen, setAuthModalOpen}}>
     {children}
    </ModalContext.Provider>
  )
}

