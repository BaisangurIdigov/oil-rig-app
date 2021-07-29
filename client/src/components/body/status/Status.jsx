import React, { useEffect, useState } from "react";
import {
  Box,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus } from "../../../redux/features/status";
import Preloader from "../Preloader";
import AddIcon from "@material-ui/icons/Add";
import ModalAddStatus from "./ModalAddStatus";
import ModalEditStatus from "./ModalEditStatus";
import { Link } from "react-router-dom";

function Status(props) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadStatus()), [dispatch]);
  const status = useSelector((state) => state.status.items);
  const loading = useSelector((state) => state.status.loading);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <TableContainer component={Paper} className="margin">
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {status.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="left">
                  <Box bgcolor={item.color} className="box"></Box>
                </TableCell>
                <TableCell align="right">
                  <Link
                    to={`/status/${item._id}`}
                    onClick={() => setId(item._id)}
                  >
                    <Fab
                      color="secondary"
                      aria-label="edit"
                      onClick={() => setEdit(true)}
                    >
                      <EditIcon />
                    </Fab>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="AddIcon">
        <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </Fab>
      </Box>
      <ModalEditStatus id={id} edit={edit} setEdit={setEdit} />
      <ModalAddStatus open={open} setOpen={setOpen} />
    </div>
  );
}

export default Status;
