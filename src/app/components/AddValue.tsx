"use client";

import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/system/Box";

import styles from "./add.module.css";
import Valid from "./Valid";

interface AddCardProps {
  onValid: (text: string) => void;
  onClose: () => void;
  type: "card" | "list" | "description";
  defaultValue?: string;
}

export default function AddCard({
  onValid,
  onClose,
  type,
  defaultValue = "",
}: AddCardProps) {
  const [value, setValue] = useState(defaultValue);
  const [placeholderTitle, setPlaceholderTitle] = useState("");
  const [validTitle, setValidTitle] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose && onClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  useEffect(() => {
    switch (type) {
      case "card":
        setPlaceholderTitle("Saissisez le titre de la liste...");
        setValidTitle("Ajouter une carte");
        break;
      case "list":
        setPlaceholderTitle("Saisissez un titre pour cette liste");
        setValidTitle("Ajouter une liste");
        break;
      case "description":
        setPlaceholderTitle("Ajouter une description plus détaillée…");
        setValidTitle("Enregistrer");
        break;
    }
  }, [type]);

  const validation = () => {
    const valuetrimed = value.trim();

    if (valuetrimed.length > 1) {
      onValid(valuetrimed);
      onClose();
      setValue("");
      return;
    }
    else if (type === "description") {
      onValid(valuetrimed);
      onClose();
      setValue("");
    }
  };

  return (
    <Box ref={ref} className={type === "list" ? styles.addlist : ""}>
      {type === "list" ? (
        <input
          autoFocus
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={styles.textfield}
          placeholder={placeholderTitle}
          onKeyDown={(event) => {
            if (event.key === "Enter") validation();
          }}
        />
      ) : (
        <textarea
          autoFocus
          value={value}
          className={type === "card" ? styles.multiline : styles.description}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholderTitle}
          onKeyDown={(event) => {
            if (event.key === "Enter" && type === "card") validation();
          }}
        />
      )}
      <Valid title={validTitle} onClick={validation} onClose={onClose} />
    </Box>
  );
}
