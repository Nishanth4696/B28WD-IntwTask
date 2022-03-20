import * as React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from 'react-router-dom';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export function CustomizedTables({rows, deleteUser }) {
const history = useHistory();
  return (
    <TableContainer component={Paper}>
      <Table style={{marginTop:'20px', width:'100vw'}}  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Name</StyledTableCell>
            <StyledTableCell align='center' >Email</StyledTableCell>
            <StyledTableCell align='center' >Mobile</StyledTableCell>
            <StyledTableCell align='center' >DOB</StyledTableCell>
            <StyledTableCell align='center' >JobType</StyledTableCell>
            <StyledTableCell align='center' >Location</StyledTableCell>
            <StyledTableCell align='center' ></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
         {rows.map((row) =>(
            <StyledTableRow key={row.DOB}>
             
              <StyledTableCell align='center'>{row.Fullname}</StyledTableCell>
              <StyledTableCell align='center'>{row.Emailid}</StyledTableCell>
              <StyledTableCell align='center'>{row.Mobileno}</StyledTableCell>
              <StyledTableCell align='center'>{row.DOB}</StyledTableCell>
              <StyledTableCell align='center'>{row.JobType}</StyledTableCell>
              <StyledTableCell align='center'>{row.PrefLoc}</StyledTableCell>
              <StyledTableCell align='center'>
              
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>history.push("/user/edit/" + row.id)}>
                  <EditIcon />
                </IconButton>

             
                <IconButton color="error" aria-label="upload picture" component="span" onClick={() =>deleteUser(row.id)}>
                  <DeleteIcon />
                </IconButton></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

