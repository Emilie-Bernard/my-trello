'use client';

import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/system/Box";

import styles from "./add.module.css";
import Valid from "./Valid";

interface AddValueProps {
    onValid: (text: string) => void;
    onClose: () => void;
}

export default function AddValue({ onValid, onClose }: AddValueProps) {
    const [value, setValue] = useState("");
        
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose && onClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClose ]);
  return (
    <Box ref={ref}
      className={styles.addlist}
    >
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className={styles.textfield} placeholder="Saissisez le titre de la liste..." />
        <Valid title="Ajouter une liste"onClick={() => { onValid(value); onClose(); setValue('') }} onClose={onClose} />
    </Box>
  );
}
