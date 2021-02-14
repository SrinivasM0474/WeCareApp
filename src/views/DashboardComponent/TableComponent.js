import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableComponent = ({data, header, isApplication}) => {
 const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((x, i) =>
              <TableCell key={i}>{x.name}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={row.lname} hover>
              {
                Object.keys(row).map(key => (
                  <TableCell component="th" scope="row">
                    {row[key]}
                  </TableCell>
                ))
              }
              
              { isApplication 
                  ? <TableCell><EditIcon color="primary" /></TableCell>
                  : null
              }
              { isApplication 
                  ? <TableCell><HighlightOffIcon color="primary" /></TableCell>
                  : null
              } 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableComponent;