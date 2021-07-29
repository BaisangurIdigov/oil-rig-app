import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { patchNotes } from "../../../redux/features/notes";

function ModalEditNotes({ id, open, setOpen }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const statuses = useSelector((state) => state.status.items);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      marginBottom: theme.spacing(),
      minWidth: 200,
    },
  }));

  const handlePatchNotes = async () => {
    await dispatch(patchNotes(id, { text, status }));
    setOpen(false);
  };

  const handleTitle = (e) => {
    setText(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const classes = useStyles();
  return (
    <div className={open === true ? "modal active" : "modal"}>
      <Box className="modalContent">
        <Box>
          <Input className={classes.formControl} onChange={handleTitle}></Input>
        </Box>

        <Box>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleStatus}
            >
              {statuses.map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Button variant="contained" onClick={handlePatchNotes}>
            Добавить
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Закрыть
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ModalEditNotes;
