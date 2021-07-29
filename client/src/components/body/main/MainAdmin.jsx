import React, { useEffect, useState } from "react";
import {
  Box,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadOilRigs } from "../../../redux/features/oilRigs";
import Preloader from "../Preloader";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import ModalRig from "./ModalRig";
import ModalEditRig from "./ModalEditRig";
import { Link } from "react-router-dom";

function MainAdmin({ input }) {
  const oilRigs = useSelector((state) => {
    return state.oilRigs.items.filter(
      (item) => item.title.indexOf(input) !== -1
    );
  });
  const loading = useSelector((state) => state.oilRigs.loading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadOilRigs()), [dispatch]);
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [id, setId] = useState("");

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>img</TableCell>
              <TableCell align="right">Номер скважины</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {oilRigs.map((item) => (
              <TableRow key={item._id}>
                <TableCell align="left">
                  <img className="avatarImg" src={item.img} />
                </TableCell>
                <TableCell align="right">№{item.title}</TableCell>
                <TableCell align="right">
                  <Link
                    onClick={() => setId(item._id)}
                  >
                    <Fab
                      color="secondary"
                      aria-label="edit"
                      onClick={() => setOpen(true)}
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
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => setOpened(true)} />
        </Fab>
        <ModalRig opened={opened} setOpened={setOpened} />
        <ModalEditRig id={id} open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
}

export default MainAdmin;
