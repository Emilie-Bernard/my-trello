"use client";

import React, { useState } from "react";
import Box from "@mui/system/Box";

import styles from "./card.module.css";
import Card from "./Card";
import ButtonIconText from "./ButtonIconText";
import Add from "@mui/icons-material/Add";

import ICardProps from "@/app/types/ICardProps";
import AddValue from "@/app/components/AddValue";

interface CardsListProps {
  cardlist: ICardProps[];
  onAddList: (title: string) => void;
  onDeleteList: (index: number) => void;
  onAddCard: (title: string, index: number) => void;
  onModifyCard: (cardIndex: number, itemIndex: number) => void;
}

export default function CardsList({ cardlist, onAddList, onDeleteList, onAddCard, onModifyCard }: CardsListProps) {
  const [displayAddList, setDisplayAddList] = useState(false); 
  return (
    <Box className={styles.cardslayout}>
      {cardlist?.length > 0 && cardlist.map((card, index) => (
        <Box key={index}>
        <Card
          title={card.title}
          list={card.items}
          onDelete={() => onDeleteList(index)}
          onAdd={(title) => {
            onAddCard(title, index);
          }}
          onModifyCard={(itemIndex) => {
            onModifyCard(index, itemIndex);
          }}
        />
        </Box>
      ))}
      {!displayAddList ? <ButtonIconText
        type="list"
        Icon={Add}
        title="Ajouter une autre liste"
        onClick={() => setDisplayAddList(true)}
      /> : <Box><AddValue type='list' onValid={(text) => onAddList(text)} onClose={() => setDisplayAddList(false)}/></Box>}
    </Box>
  );
}
