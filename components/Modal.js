"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal" (node 2:15), with the boolean property "Show separator".
export default function Modal({
  isOpen = false,
  onClose,
  title = "Hick's Law",
  children = "Jo flere valgmuligheder, jo længere tid tager det at vælge.",
  showSeparator = true
}) {
  const dialogRef = useRef(null);

  // A <dialog> opens as a modal with showModal() and closes with close()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Clicking the backdrop (outside the card) closes the modal
  function handleClick(event) {
    if (event.target === dialogRef.current) dialogRef.current.close();
  }

  return (
    <dialog ref={dialogRef} className={styles.modal} onClick={handleClick} onClose={onClose}>
      <div className={styles.content}>
        {showSeparator && <div className={styles.separator} aria-hidden="true" />}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{children}</p>
      </div>
    </dialog>
  );
}
