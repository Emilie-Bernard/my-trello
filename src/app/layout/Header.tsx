import Link from "next/link";
import Box from "@mui/system/Box";
import Image from "next/image";

import styles from "./header.module.css";

export default function Header() {
  return (
    <Box className={styles.navbar}>
      <Link href="/">
        <Image
          src="/trello.png"
          alt="Trello app"
          width={80}
          height={30}
          className={styles.img}
        />
      </Link>
    </Box>
  );
}
