import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

function TableHeadNotes(props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left"></TableCell>
        <TableCell align="left"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeadNotes;
