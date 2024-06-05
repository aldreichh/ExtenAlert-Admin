import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

// Define columns for the table
const columns = [
  {
    width: 10,
    label: 'ID',
    dataKey: 'id',
  },
  {
    width: 400,
    label: 'URL',
    dataKey: 'url',
  },
  {
    width: 50,
    label: 'Status',
    dataKey: 'status',
  },
  {
    width: 50,
    label: 'Threat Level',
    dataKey: 'threat_level',
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed', border: 'none' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

// Fixed header content
function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

// Row content
function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {column.dataKey === 'threat_level' && !row[column.dataKey] ? 'No Data' : row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function WhitelistedURLs() {
  const [whitelistedUrls, setWhitelistedUrls] = useState([]);
  
  useEffect(() => {
    // Fetch whitelisted URLs
    fetch('http://localhost:5000/whitelisted-urls')
      .then(response => response.json())
      .then(data => setWhitelistedUrls(data))
      .catch(error => console.error('Error fetching whitelisted URLs:', error));
  }, []);

  return (
    <Paper style={{ height: '100%', width: '100%'}}>
      <TableVirtuoso
        data={whitelistedUrls}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
