"use client";

import Box from "@mui/system/Box";

import styles from "./button.module.css";
import Tooltip from "@mui/material/Tooltip";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick: () => void;
  tooltiptext: string;
}

export default function ButtonIcon({
  Icon,
  onClick,
  tooltiptext,
}: IconButtonProps) {
  return (
    <Box className={styles.btnicon} onClick={onClick}>
      <Tooltip
      componentsProps={{ tooltip: { className: styles.tooltip } }}
      
        title={tooltiptext}
        placement="bottom-start"
        followCursor
      >
        {Icon && <Icon sx={{ fontSize: 20 }} />}
      </Tooltip>
    </Box>
  );
}
