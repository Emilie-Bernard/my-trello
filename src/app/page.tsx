'use client';

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/app/layout/Header";
import Box from "@mui/system/Box";
import Button from "@/app/components/Button";
import CardsList from "@/app/components/CardsList";
import initData from "@/app/utils/data.json";

import ICardProps from "@/app/types/ICardProps";

export default function Home() {
  const [cardlist, setCardlist] = useState<ICardProps[]>(initData.cardlist);
  return (
    <div>
      <Header />
      <Box className={styles.description}>
        <Box className={styles.titlebox}>
          <Box className={styles.titletext}>
          Tableau principal
          </Box>
          <Button title="Initialiser le jeu de données" onClick={() => { console.log('hello') }} color="white" bgcolor="#5AAC44" />
        </Box>
        <Box className={styles.listbox}>
        <CardsList cardlist={cardlist} onDelete={(index) => console.log('delete', index)} onAdd={() => console.log('add')} />
        </Box>
      </Box>
    </div>
  );
}