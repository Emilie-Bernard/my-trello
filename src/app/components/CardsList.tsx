"use client";

import Box from "@mui/system/Box";

import styles from "./card.module.css";
import Card from "./Card";
import ButtonIconText from "./ButtonIconText";
import Add from "@mui/icons-material/Add";

import ICardProps from "@/app/types/ICardProps";

interface CardsListProps {
  cardlist: ICardProps[];
  onAdd: () => void;
  onDelete: (index: Number) => void;
}

export default function CardsList({ cardlist, onAdd, onDelete }: CardsListProps) {
  return (
    <Box className={styles.cardslayout}>
      {cardlist?.length > 0 && cardlist.map((card, index) => (
        <Card
          key={card.title}
          title={card.title}
          list={card.items}
          onDelete={() => onDelete(index)}
          onAdd={() => {
            onAdd();
          }}
        />
      ))}
      <ButtonIconText
        type="list"
        Icon={Add}
        title="Ajouter une autre liste"
        onClick={() => console.log("Add")}
      />
    </Box>
  );
}
