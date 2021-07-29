import React, { useState } from "react";
import { Box, Button, Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { patchRig } from '../../../redux/features/oilRigs'

function ModalEditRig({id, open, setOpen }) {

  const dispatch = useDispatch();
  const [img, setColor] = useState("");
  const [title, setTitle] = useState("");


  const handlePatchRig = async () => {
    await dispatch(patchRig(id, { img, title }))
    setOpen(false)
  };

  const handleImg = (e) => {
    setColor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  console.log(id)
  return (
    <div className={open === true ? "modal active" : "modal"}>
      <Box className="modalContent">
        <Box>
          <Input placeholder="Номер" onChange={handleTitle}></Input>
        </Box>
        <Box>
          <Input placeholder="Фото" onChange={handleImg}></Input>
        </Box>

        <Button variant="contained" onClick={handlePatchRig}>
          Добавить
        </Button>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Закрыть
        </Button>
      </Box>
    </div>
  );
}

export default ModalEditRig;