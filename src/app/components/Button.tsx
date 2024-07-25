'use client';

import Box from "@mui/system/Box";
import styles from "./button.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  color: string;
  bgcolor: string;
}

export default function Button({ title, onClick, color, bgcolor }: ButtonProps) {
  return (
    <Box
      className={styles.btn}
      sx={{
        bgcolor: bgcolor,
        color: color,
      }}
      onClick={onClick}
    >
      {title}
    </Box>
  );
}
