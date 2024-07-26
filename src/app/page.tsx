"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/app/layout/Header";
import Box from "@mui/system/Box";
import Button from "@/app/components/Button";
import CardsList from "@/app/components/CardsList";
import { initData } from "@/app/utils/data";

import ICardProps from "@/app/types/ICardProps";
import IItemProps from "@/app/types/IItemProps";
import CardModal from "./components/CardModal";

export default function Home() {
  const [cardlist, setCardlist] = useState<ICardProps[]>(
    JSON.parse(JSON.stringify(initData.cardlist))
  );
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [modifyItemIndex, setModifyItemIndex] = useState<[number, number] | []>(
    []
  );

  const initDataFnc = () => {
    console.log("initData", initData.cardlist);
    console.log("cardlist", cardlist);
    setCardlist(JSON.parse(JSON.stringify(initData.cardlist)));
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
  const removeIteminCard = (modifyItemIndex: [number, number] | []) => {
    const cards = cardlist.map((card, idx) => {
      if (idx === modifyItemIndex[0])
        card.items = card.items.filter(
          (item, itemIdx) => itemIdx !== modifyItemIndex[1]
        );
      return card;
    });
    setCardlist(cards);
  };
  const modifyIteminCard = (
    modifyItemIndex: [number, number] | [],
    newitem: IItemProps
  ) => {
    const cards = cardlist.map((card, idx) => {
      if (idx === modifyItemIndex[0])
        card.items.map((item, itemIdx) => {
          if (itemIdx === modifyItemIndex[1])
            return (card.items[itemIdx] = newitem);
        });
        return card
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
            onModifyCard={(cardIndex, itemCard) => {
              setModifyItemIndex([cardIndex, itemCard]);
              setCardModalOpen(true);
            }}
            onAddCard={addItemInCard}
          />
        </Box>
        {cardModalOpen && modifyItemIndex.length === 2 && (
          <CardModal
            cardlist={cardlist}
            modifyItemIndex={modifyItemIndex}
            onClose={() => setCardModalOpen(false)}
            onDelete={() => removeIteminCard(modifyItemIndex)}
            onChange={(newItem) => modifyIteminCard(modifyItemIndex, newItem)}
          />
        )}
      </Box>
    </div>
  );
}
