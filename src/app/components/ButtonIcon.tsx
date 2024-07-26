import IconButton from "@mui/material/IconButton";

import Box from "@mui/system/Box";

import styles from "./button.module.css";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick: () => void;
}

export default function ButtonIcon({ Icon, onClick }: IconButtonProps) {
  return (
    <IconButton onClick={onClick} aria-label="delete">
      <Icon sx={{ fontSize: 20 }} />
    </IconButton>
  );
}
