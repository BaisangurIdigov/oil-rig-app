import React, { useEffect, useState } from "react";
import { Box, Fab, TableBody, TableCell, TableRow } from "@material-ui/core";
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../../../redux/features/notes";
import { useParams } from "react-router-dom";
import ModalEditNotes from "./ModalEditNotes";

function TableBodyNotes(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.items);
  const statuses = useSelector((state) => state.status.items);
  const [open, setOpen] = useState(false);
  useEffect(() => dispatch(loadNotes(id)), [dispatch]);

  return (
    <TableBody>
      {notes.map((item) => {
        console.log(item);
        const status = statuses.find((items) => items._id === item?.status);

        return (
          <TableRow key={item?._id}>
            <TableCell component="th" scope="row">
              <Box>{moment(item?.createdAt).format("YY.MM.DD HH:mm")}</Box>
              <Box className="noteStatus" bgcolor={status?.color}>
                {status?.title}
              </Box>
            </TableCell>
            <TableCell align="left">{item?.text}</TableCell>
            <TableCell align="right">
              <Fab
                color="primary"
                aria-label="edit"
                onClick={() => setOpen(true)}
              >
                <EditIcon />
              </Fab>
            </TableCell>
            <ModalEditNotes id={item?._id} open={open} setOpen={setOpen} />
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TableBodyNotes;
