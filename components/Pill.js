import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// Type=Primary, State=Default (node 2:20) and State=Hover (node 2:24).
// Type=Secondary, State=Default (node 2:22) and State=Hover (node 2:26).
export default function Pill({ children = "Primary", onClick, type = "primary" }) {
  return (
    <button type="button" className={`${styles.pill} ${styles[type] ?? ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
