import { createContext, useState } from "react";
import Toast from "../components/Toast/Toast";
import ToastContainer from "../components/Toast/ToastContainer";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [elements, setElements] = useState([]);

  const value = {
    elements,
    addToast: (toast) => {
      setElements((prev) => [
        ...prev,
        <Toast
          key={toast.id}
          title={toast.title}
          content={toast.content}
          duration={toast.duration}
        />,
      ]);
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer>
        {elements.map((element) => {
          return <li key={element.key}>{element}</li>;
        })}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
