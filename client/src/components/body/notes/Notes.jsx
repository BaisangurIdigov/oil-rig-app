import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus } from "../../../redux/features/status";
import {
  Box,
  Button,
  Paper,
  Table,
  TableContainer,
  TextField,
} from "@material-ui/core";
import TableHeadNotes from "./TableHeadNotes";
import TableBodyNotes from "./TableBodyNotes";
import { useParams } from "react-router-dom";
import { postNotes } from "../../../redux/features/notes";

function Notes(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.status.items);
  useEffect(() => dispatch(loadStatus()), [dispatch]);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [rig, setRig] = useState(id);

  const handleNotesPost = () => {
    dispatch(postNotes({ rig, text, status }));
  };

  const handleChangeNotes = (e) => {
    setText(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Box className="noteBox">
        <TextField
          id="outlined-basic"
          label="Введите комментарий"
          variant="outlined"
          className="noteInput"
          inputMode={"text"}
          onChange={handleChangeNotes}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          helperText="Выберите статус"
          variant="outlined"
          className="formControl"
          onChange={handleChangeStatus}
        >
          <option disabled selected>
            Выберите статус
          </option>
          {statuses.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.title}
              </option>
            );
          })}
        </TextField>
        <Button
          onClick={handleNotesPost}
          variant="contained"
          color="primary"
          className="noteButton"
        >
          Добавить
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHeadNotes />
          <TableBodyNotes />
        </Table>
      </TableContainer>
    </>
  );
}

export default Notes;
