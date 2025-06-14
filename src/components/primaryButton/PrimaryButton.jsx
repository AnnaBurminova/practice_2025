import styles from "./PrimaryButton.module.scss";

export const PrimaryButton = ({
  width,
  height,
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
