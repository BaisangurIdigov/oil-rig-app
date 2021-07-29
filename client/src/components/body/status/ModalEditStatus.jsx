import React, { useState } from "react";
import { Box, Button, Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { patchStatus } from "../../../redux/features/status";
import { useParams } from "react-router-dom";

function ModalEditStatus({ id, edit, setEdit }) {

  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");

  const handlePatchStatus = async () => {
    await dispatch(patchStatus(id, { color, title }));
    setEdit(false);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  console.log(id);
  return (
    <div className={edit === true ? "modal active" : "modal"}>
      <Box className="modalContent">
        <Box>
          <Input placeholder="Статус" onChange={handleTitle}></Input>
        </Box>
        <Box>
          <Input placeholder="Цвет" onChange={handleColor}></Input>
        </Box>

        <Button variant="contained" onClick={handlePatchStatus}>
          Добавить
        </Button>
        <Button variant="contained" onClick={() => setEdit(false)}>
          Закрыть
        </Button>
      </Box>
    </div>
  );
}

export default ModalEditStatus;
