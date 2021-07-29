import React, { useState } from 'react'
import { Box, Button, Input } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { postStatus } from '../../../redux/features/status'

function ModalAddStatus ({open, setOpen }) {
  const dispatch = useDispatch()
  const [color, setColor] = useState("")
  const [title, setTitle] = useState("")

  const handlePostStatus = () => {
    dispatch(postStatus({color, title}))
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className={open === true ? "modal active" : "modal"}>
      <Box className="modalContent">
        <Box>
          <Input
            placeholder="Статус"
            onChange={handleTitle}
          ></Input>
        </Box>
        <Box>
          <Input placeholder="Цвет" onChange={handleColor}></Input>
        </Box>

        <Button variant="contained" onClick={handlePostStatus}>
          Добавить
        </Button>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Закрыть
        </Button>
      </Box>
    </div>
  );
}

export default ModalAddStatus;