"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/app/layout/Header";
import Box from "@mui/system/Box";
import Button from "@/app/components/Button";
import CardsList from "@/app/components/CardsList";
import initData from "@/app/utils/data.json";

import ICardProps from "@/app/types/ICardProps";
import IItemProps from "@/app/types/IItemProps";
import CardModal from "./components/CardModal";

export default function Home() {
  const [cardlist, setCardlist] = useState<ICardProps[]>(initData.cardlist);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [modifyItemIndex, setModifyItemIndex] = useState<[number, number] | []>([]);

  const initDataFnc = () => {
    setCardlist([]);
    setCardlist(initData.cardlist);
  };
  const addInList = (title: string) => {
    setCardlist([...cardlist, { title: title, items: [] }]);
  };
  const removeInList = (index: number) => {
    setCardlist(cardlist.filter((item, idx) => idx !== index));
  };
  const addItemInCard = (title: string, index: number) => {
    const cards = cardlist.map((item, idx) => {
      console.log("item", item);
      if (idx === index) {
        item.items = [
          ...(item?.items ?? []),
          { title: title, description: "", follow: false },
        ];
      }
      return item;
    });
    setCardlist(cards);
  };
  const removeIteminCard = (cardIndex: number, itemIndex: number) => {
    const cards = cardlist.map((card, idx) => {
      if (idx === cardIndex) {
        card.items.filter((item, itemIdx) => itemIdx !== itemIndex);
      }
      return card;
    });
    setCardlist(cards);
  };
  const modifyIteminCard = (cardIndex: number, itemIndex: number, item: IItemProps) => {
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
          <Box className={styles.titletext}>Tableau principal</Box>
          <Button
            title="Initialiser le jeu de données"
            onClick={initDataFnc}
            color="white"
            bgcolor="#5AAC44"
          />
        </Box>
        <Box className={styles.listbox}>
          <CardsList
            cardlist={cardlist}
            onDeleteList={removeInList}
            onAddList={addInList}
            onModifyCard={(cardIndex, itemCard) => { setModifyItemIndex([cardIndex, itemCard]); setCardModalOpen(true); }}
            onAddCard={addItemInCard}
          />
        </Box>
        {cardModalOpen && modifyItemIndex.length === 2 && 
        <CardModal cardlist={cardlist} modifyItemIndex={modifyItemIndex} onClose={() => setCardModalOpen(false)} onDelete={() => removeIteminCard(1, 1)} onChange={(newItem) => modifyIteminCard(1, 1, newItem)}/>
        }
      </Box>
    </div>
  );
}
