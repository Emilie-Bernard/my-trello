"use client";

import Box from "@mui/system/Box";

import styles from "./button.module.css";
import CheckIcon from "@mui/icons-material/Check";

interface ButtonIconTextProps {
  Icon: React.ElementType;
  title: string;
  onClick: () => void;
  type: "card" | "list" | "action";
  checked?: boolean;
}

export default function ButtonIconText({
  Icon,
  title,
  onClick,
  type,
  checked = false,
}: ButtonIconTextProps) {
  const getStyle = () => {
    switch (type) {
      case "card":
        return styles.cardbtnstyle;
      case "list":
        return styles.listbtnstyle;
      case "action":
        return styles.btnaction;
    }
  };

  return (
    <Box className={`${styles.btnicontext} ${getStyle()}`} onClick={onClick}>
      {Icon && (
        <Icon
          sx={{
            fontSize: 20,
            ...(type === "action" && {
              color: "rgb(145, 145, 145)",
              width: "16px",
              height: "16px",
            }),
          }}
        />
      )}
      {title}
      {type === "action" && checked && (
        <Box className={styles.checkbox}>
          <CheckIcon sx={{ color: "white", fontSize: 18 }} />
        </Box>
      )}
    </Box>
  );
}
