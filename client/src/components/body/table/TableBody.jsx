import React, { useEffect } from "react";
import { Box, TableBody, TableCell, TableRow } from "@material-ui/core";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { loadOilRigs } from "../../../redux/features/oilRigs";
import { loadStatus } from "../../../redux/features/status";
import Preloader from "../Preloader";
import { Link } from "react-router-dom";

function TabBody({ input }) {
  const oilRigs = useSelector((state) => {
    return state.oilRigs.items.filter(
      (item) => item.title.indexOf(input) !== -1
    );
  });
  const statuses = useSelector((state) => state.status.items);
  const loading = useSelector((state) => state.oilRigs.loading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadOilRigs()), [dispatch]);
  useEffect(() => dispatch(loadStatus()), [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <TableBody>
      {oilRigs.map((item) => {
        const status = statuses.find(
          (items) => items._id === item.lastNotes?.status
        );
        return (
          <TableRow key={item._id}>
            <TableCell>
              <img className="avatarImg" src={item.img} />
            </TableCell>
            <TableCell align="right">
              <Link to={`/rig/${item._id}/notes`}>№{item.title}</Link>
            </TableCell>
            <TableCell align="right">
              {moment(item.lastNotes?.createdAt).format("YY.MM.DD HH:mm")}
            </TableCell>
            <TableCell align="center">
                <Box bgcolor={status?.color} className="status">{status?.title}</Box>
            </TableCell>
            <TableCell align="right">{item.text.length}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TabBody;
