import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        <Grid container spacing={2} wrap="nowrap">
          <Grid item xs>
            {props.board?.cards?.map((item) => (
              <Card
                key={item.id}
                card={item}
                boardId={props.board.id}
                removeCard={props.removeCard}
                dragEntered={props.dragEntered}
                dragEnded={props.dragEnded}
                updateCard={props.updateCard}
              />
            ))}
          </Grid>
          <Grid item xs>
            {props.board?.cards?.map((item) => (
              <Card
                key={item.id}
                card={item}
                boardId={props.board.id}
                removeCard={props.removeCard}
                dragEntered={props.dragEntered}
                dragEnded={props.dragEnded}
                updateCard={props.updateCard}
              />
            ))}
          </Grid>
          
        </Grid>
        <Editable
            text="+ Tambah Sub Task"
            placeholder="Enter Card Title"
            displayClass="board_add-card"
            editClass="board_add-card_edit"
            onSubmit={(value) => props.addCard(props.board?.id, value)}
          />
      </div>
    </div>
  );
}

export default Board;
