"use client";

import React, { useState } from "react";
import Box from "@mui/system/Box";

import styles from "./card.module.css";
import Card from "./Card";
import ButtonIconText from "./ButtonIconText";
import Add from "@mui/icons-material/Add";

import ICardProps from "@/app/types/ICardProps";
import AddList from "@/app/components/AddList";

interface CardsListProps {
  cardlist: ICardProps[];
  onAddList: (title: string) => void;
  onDeleteList: (index: number) => void;
  onAddCard: (title: string, index: number) => void;
}

export default function CardsList({ cardlist, onAddList, onDeleteList, onAddCard }: CardsListProps) {
  const [displayAddList, setDisplayAddList] = useState(false); 
  return (
    <Box className={styles.cardslayout}>
      {cardlist?.length > 0 && cardlist.map((card, index) => (
        <Box>
        <Card
          key={card.title}
          title={card.title}
          list={card.items}
          onDelete={() => onDeleteList(index)}
          onAdd={(title) => {
            onAddCard(title, index);
          }}
        />
        </Box>
      ))}
      {!displayAddList ? <ButtonIconText
        type="list"
        Icon={Add}
        title="Ajouter une autre liste"
        onClick={() => setDisplayAddList(true)}
      /> : <Box><AddList onValid={(text) => onAddList(text)} onClose={() => setDisplayAddList(false)}/></Box>}
    </Box>
  );
}
