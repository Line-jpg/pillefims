"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Puts Pill and Modal together: clicking the pill opens the modal (step 1.2).
export default function PillModal({ label = "Primary", type = "primary", title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} onClick={() => setIsOpen(true)}>
        {label}
      </Pill>
      {/* onClose fires on Escape and backdrop click, so the state stays in sync and the pill can open it again */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        {children}
      </Modal>
    </>
  );
}
