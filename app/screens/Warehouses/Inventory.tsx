import React = require("react");
import { connect } from "react-redux";
import {
  Paper,
  TableContainer,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  TableBody,
  Checkbox,
  TablePagination
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    maxHeight: 380
  },
  table: {
    width: "100%"
  }
}));

const columns = [
  {
    id: "checkBox",
    label: "",
    minWidth: 30,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "debit",
    label: "Debit",
    minWidth: 170,
    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "credit",
    label: "Credit",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "balance",
    label: "Balance",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  }
];

function createData(id, date, description, debit, credit, balance) {
  return { id, date, description, debit, credit, balance };
}

const rows = [
  createData(
    "t1",
    "3/31/2020 1:02",
    "Sales Transations [#1]",
    "-",
    "K 200.00",
    "(98.90)"
  ),
  createData(
    "t2",
    "3/3/2020 1:02",
    "Sales Transations [#2]",
    "-",
    "K 200.00",
    "(98.90)"
  )
];

const Inventory = props => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedId, setSelectedId] = React.useState();
  const [selected, setSelected] = React.useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ height: "59vh" }}>
      <Paper>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <Typography variant="h6">{column.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      style={{ cursor: "context-menu" }}
                      onClick={() => {
                        //   setSelectedId(row.id);
                        //   setSelected(row);
                        //   console.log(row);
                      }}
                      selected={selectedId === row.id}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        const labelId = `enhanced-table-checkbox-${index}`;

                        if (column.id === "checkBox") {
                          return (
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={selectedId === row.id}
                                inputProps={{
                                  "aria-labelledby": labelId
                                }}
                              />
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Typography>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </Typography>
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
