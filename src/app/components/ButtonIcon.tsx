'use client';

import Box from "@mui/system/Box";

import styles from "./button.module.css";
import Tooltip from '@mui/material/Tooltip';

interface IconButtonProps {
  Icon: React.ElementType;
  onClick: () => void;
  tooltiptext: string;
}

export default function ButtonIcon({ Icon, onClick, tooltiptext }: IconButtonProps) {
  return (
    <Box
      className={styles.btnicon}
      onClick={onClick}
    >
      <Tooltip title={tooltiptext} placement="bottom">
      {Icon && <Icon sx={{ fontSize: 22 }} />}
      </Tooltip>
    </Box>
  );
}
