import React from "react";
import { Paper, Table, TableContainer } from "@material-ui/core";
import TabBody from "../table/TableBody";
import TabHeader from "../table/TableHead";

function Main({ input }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TabHeader />
          <TabBody input={input} />
        </Table>
      </TableContainer>
    </div>
  );
}

export default Main;
