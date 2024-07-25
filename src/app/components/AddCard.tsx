'use client';

import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/system/Box";

import styles from "./add.module.css";
import Valid from "./Valid";

interface AddCardProps {
    onValid: (text: string) => void;
    onClose: () => void;
}

export default function AddCard({ onValid, onClose }: AddCardProps) {
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
    <Box ref={ref}>
        <textarea className={styles.multiline} onChange={(event) => setValue(event.target.value)}  placeholder="Saisissez un titre pour cette carte…" />
        <Valid title="Ajouter une carte" onClick={() => { onValid(value); onClose(); setValue('') }} onClose={onClose} />
    </Box>
  );
}
