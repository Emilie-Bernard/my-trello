"use client";

import React, { useState } from "react";
import Box from "@mui/system/Box";
import Close from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

import styles from "./card.module.css";
import ButtonIconText from "./ButtonIconText";

import IItemProps from "@/app/types/IItemProps";
import ICardProps from "@/app/types/ICardProps";
import ButtonIcon from "./ButtonIcon";
import AddValue from "@/app/components/AddValue";

interface CardModalProps {
  cardlist: ICardProps[];
  modifyItemIndex: [number, number];
  onDelete: () => void;
  onChange: (newitem: IItemProps) => void;
  onClose: () => void;
}

export default function CardModal({
  cardlist,
  modifyItemIndex,
  onDelete,
  onChange,
  onClose,
}: CardModalProps) {
  const [validate, setValidate] = useState(false);
  const card = cardlist[modifyItemIndex[0]].items[modifyItemIndex[1]];
  const onIconClick = () => {
    const valid = confirm(`Vous allez supprimer la carte nommée ${card.title}.
Appuyez sur "OK" pour continuer.
Ou sur "Annuler" pour fermer.`);
    if (valid) {
        onDelete();
        onClose();
    }
  };
  return (
    <Dialog
      onClose={onClose}
      open
      PaperProps={{
        sx: { width: "768px", maxWidth: "768px", margin: "0px" },
      }}
    >
      <Box className={styles.modallayout}>
        <Box className={styles.closebutton}>
          <ButtonIcon Icon={Close} onClick={onClose} />
        </Box>
        <Box className={styles.headermodal}>
          <Box className={styles.headermodaltitle}>{card.title}</Box>
          <Box className={styles.inlist}>
            <Box>
              Dans la liste{" "}
              <span className={styles.underline}>{cardlist[modifyItemIndex[0]].title}</span>
            </Box>
            {card.follow && (
              <RemoveRedEyeOutlinedIcon
                sx={{
                  color: "rgb(145, 145, 145)",
                  witdh: "16px",
                  height: "16px",
                }}
              />
            )}
          </Box>
        </Box>
        <Box className={styles.valuedisplay}>
          <Box sx={{ flexGrow: 1 }}>
            <Box className={styles.descriptionmodaltitle}>Description</Box>
            {validate ? (
              <AddValue type='description' defaultValue={card.description} onValid={(text) => onChange({ ...card, description: text })} onClose={() => setValidate(false)}/>
            ) : (
              <Box
                sx={{ cursor: "pointer", fontSize: "14px" }}
                onClick={() => setValidate(true)}
              >
                {card.description.length > 0 ? (
                  card.description
                ) : (
                  <Box className={styles.textfield}>
                    Ajouter une description plus détaillée…
                  </Box>
                )}
              </Box>
            )}
          </Box>
          <Box className={styles.actionmodal}>
            <Box className={styles.descriptionmodaltitle}>Actions</Box>
            <ButtonIconText
              Icon={RemoveRedEyeOutlinedIcon}
              title="Suivre"
              type="action"
              onClick={() => onChange({ ...card, follow: !card.follow })}
              checked={card.follow}
            />
            <ButtonIconText
              Icon={RemoveIcon}
              title="Supprimer"
              type="action"
              onClick={onIconClick}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
