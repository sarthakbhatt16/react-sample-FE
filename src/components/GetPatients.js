import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Patient Data
function createData(id, name, address, age, gender, phone, admissionDate) {
  return { id, name, address, age, gender, phone, admissionDate };
}

const rows = [
  createData(
    0,
    'Elvis Presley',
    'Tupelo, MS',
    27,
    'Male',
    '123456789',
    '16 Mar, 2022'
  ),
  createData(
    1,
    'Paul McCartney',
    'London, UK',
    47,
    'Male',
    '123213123123',
    '16 Feb, 2022'
  ),
  createData(
    2,
    'Tom Scholz',
    'Boston, MA',
    21,
    'Male',
    '22222342321',
    '26 Jan, 2022'
  ),
  createData(
    3,
    'Michael Jackson',
    'Gary, IN',
    55,
    'Male',
    '22222233333',
    '16 Apr, 2022',
  ),
  createData(
    4,
    'Bruce Springsteen',
    'Long Branch, NJ',
    38,
    'Male',
    '222231313131',
    '3 May, 2022'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function PatientsContent() {
  return (
    <React.Fragment>
      <Title>Patients</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Admission Date</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.admissionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}
