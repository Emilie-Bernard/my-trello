'use client';

import Box from "@mui/system/Box";

import styles from "./button.module.css";

interface ButtonIconTextProps {
  Icon: React.ElementType;
  title: string;
  onClick: () => void;
  type: "card" | "list";
}

export default function ButtonIconText({ Icon, title, onClick, type }: ButtonIconTextProps) {
  
  
    return (
    <Box
      className={`${styles.btnicontext} ${type === "card" ? styles.cardbtnstyle : styles.listbtnstyle}`}
      onClick={onClick}
    >
      {Icon && <Icon sx={{ fontSize: 20 }} />}
      {title}
    </Box>
  );
}
