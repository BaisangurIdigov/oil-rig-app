import React, { useState } from "react";
import { Box, Button, Input } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { postRigs } from '../../../redux/features/oilRigs'

function ModalRig({ opened, setOpened }) {
  const dispatch = useDispatch()
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");

  const handlePostRig = () => {
    dispatch(postRigs({img, title}))
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };

  const handleNumber = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={opened === true ? "modal active" : "modal"}>
      <Box className="modalContent">
        <Box>
          <Input
            placeholder="Введите номер Скважины"
            onChange={handleNumber}
          ></Input>
        </Box>
        <Box>
          <Input placeholder="Ссылка на фото" onChange={handleImg}></Input>
        </Box>

        <Button variant="contained" onClick={handlePostRig}>
          Добавить
        </Button>
        <Button variant="contained" onClick={() => setOpened(false)}>
          Закрыть
        </Button>
      </Box>
    </div>
  );
}

export default ModalRig;
