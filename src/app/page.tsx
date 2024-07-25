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

  const initDataFnc = () => {
    setCardlist([]);
    setCardlist(initData.cardlist);
  };
  const addInList = (title: string) => {
    setCardlist([...cardlist, {title: title, items:[]}]);
  };
  const removeInList = (index: number) => {
    setCardlist(cardlist.filter((item, idx) => idx !== index));
  };
  const addInCard = (title: string, index:number) => {
    const cards = cardlist.map((item, idx) => {
      console.log("item", item);
      if (idx === index) {
        item.items = [...item?.items ?? [], {title: title, description: '', follow: false}]
      }
      return item;
    });
    console.log("cards", cards);
    setCardlist(cards);
  };
  const removeInCard = (cardIndex: number, itemIndex: number) => {
    const cards = cardlist.map((card, idx) => {
      if (idx === cardIndex) {
          card.items.filter((item, itemIdx) => itemIdx !== itemIndex);
      }
      return card;
    });
    setCardlist(cards);
  };
  return (
    <div>
      <Header />
      <Box className={styles.description}>
        <Box className={styles.titlebox}>
          <Box className={styles.titletext}>
          Tableau principal
          </Box>
          <Button title="Initialiser le jeu de données" onClick={initDataFnc} color="white" bgcolor="#5AAC44" />
        </Box>
        <Box className={styles.listbox}>
        <CardsList cardlist={cardlist} onDeleteList={(index) => removeInList(index)} onAddList={(title) => addInList(title)} onAddCard={(title, index) => addInCard(title, index)} />
        </Box>
      </Box>
    </div>
  );
}