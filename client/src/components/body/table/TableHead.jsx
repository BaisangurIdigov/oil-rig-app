import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

function TabHeader(props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell align="right">Номер скважины</TableCell>
        <TableCell align="right">Последнее изменения</TableCell>
        <TableCell align="right">Статус</TableCell>
        <TableCell align="right">Записей</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TabHeader;
