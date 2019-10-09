import React from 'react';
import { array } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const Table = ({ columns, rows }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MaterialTable className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(column => <TableCell key={column}>{column}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              {columns.map(column => <TableCell key={column}>{row[column]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </Paper>
  );
};

export default Table;

Table.propTypes = {
  rows: array.isRequired,
  columns: array.isRequired,
};
