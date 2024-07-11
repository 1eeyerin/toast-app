import { useState, useEffect } from "react";
import clsx from "clsx";

const Toast = ({ title, content, duration = 2000 }) => {
  const [toastClass, setToastClass] = useState(styles.toast);

  useEffect(() => {
    setToastClass(clsx(styles.toast, styles.toastActive));

    const timeout = setTimeout(() => {
      setToastClass(styles.toast);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <div className={toastClass}>
      <p className={styles.toastTitle}>{title}</p>
      <p className={styles.toastContent}>{content}</p>
    </div>
  );
};

const styles = {
  toast: [
    "border",
    "flex",
    "flex-col",
    "justify-center",
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-80",
    "transition",
    "duration-500",
    "translate-x-[calc(100%+24px)]",
  ].join(" "),
  toastActive: ["!translate-x-0"].join(" "),
  toastTitle: ["text-sm", "font-semibold"].join(" "),
  toastContent: ["text-sm"].join(" "),
};

export default Toast;
