import Box from "@mui/system/Box";
import CloseIcon from '@mui/icons-material/Close';

import styles from "./valid.module.css";
import stylesButton from "./button.module.css";
import Button from "./Button";

interface CardFncProps {
    title: string;
    onClick: () => void;
    onClose: () => void;
}

export default function Valid({ title, onClick, onClose }: CardFncProps) {

    return (
        <Box className={styles.valid}>
            <Button title={title} onClick={onClick} color="white" bgcolor="#5AAC44" />
            <CloseIcon className={stylesButton.iconClose} onClick={onClose} sx={{ fontSize: "32px" }} />
        </Box>
    );
}
