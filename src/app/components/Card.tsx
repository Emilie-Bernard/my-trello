"use client";

import React, { useState } from "react";
import Box from "@mui/system/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Add from "@mui/icons-material/Add";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";

import styles from "./card.module.css";
import ButtonIcon from "./ButtonIcon";
import ButtonIconText from "./ButtonIconText";
import AddCard from "@/app/components/AddCard";

import IItemProps from "@/app/types/IItemProps";

interface CardFncProps {
  title: string;
  list: IItemProps[];
  onDelete: () => void;
  onAdd: (title: string) => void;
}

export default function Card({ title, list, onDelete, onAdd }: CardFncProps) {
  const [displayAddCard, setDisplayAddCard] = useState(false); 
  const onIconClick = () => {
    const valid = confirm(`Vous allez supprimer la liste nommée My second list.
Appuyez sur "OK" pour continuer.
Ou sur "Annuler" pour fermer.`);
    if (valid) onDelete();
  }
  return (
    <Box className={styles.cardlayout}>
      <Box className={styles.titlebox}>
        <Box className={styles.titletext}>{title}</Box>
        <ButtonIcon
          Icon={MoreHorizIcon}
          onClick={onIconClick}
          tooltiptext="Supprimer cette liste"
        />
      </Box>
      <Box className={styles.listincard}>
        {list.map((item) => (
          <Box
            className={styles.itemincard}
            onClick={() => console.log("open item")}
            key={item.title + item.follow + item.description}
          >
            <Box className={styles.titleitem}>{item.title}</Box>
            <Box className={styles.iconsitem}>
              {item.follow && <RemoveRedEyeOutlinedIcon sx={{ color: "rgb(145, 145, 145)", witdh: "16px", height: "16px", marginBottom: "4px" }} />}
              {item.description && <SubjectOutlinedIcon sx={{ color: "rgb(145, 145, 145)", witdh: "16px", height: "16px", marginBottom: "4px" }} />}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={styles.addincard}>
      {!displayAddCard ? <ButtonIconText
          Icon={Add}
          onClick={() => {
            setDisplayAddCard(true);
          }}
          title="Ajouter une autre carte"
          type="card"
        /> : <AddCard onValid={(text) => onAdd(text)} onClose={() => setDisplayAddCard(false)}/>}
      </Box>
    </Box>
  );
}
