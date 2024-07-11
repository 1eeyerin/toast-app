const ToastContainer = ({ children = [] }) => {
  if (!children.length) return null;

  return <ul className={styles.toastContainer}>{children}</ul>;
};

const styles = {
  toastContainer: [
    "fixed",
    "flex",
    "flex-col",
    "items-end",
    "justify-end",
    "bottom-6",
    "right-6",
    "z-10",
    "gap-3",
  ].join(" "),
};

export default ToastContainer;
