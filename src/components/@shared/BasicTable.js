import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import styled from 'styled-components';
import { ExportToCsv } from 'export-to-csv';
import { borderBottom } from '@mui/system';
import {
    Box,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    TextField,
  } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';


//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    status:'active'
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
    status:'active'
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
    status:'active'
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
    status:'active'
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
    status:'active'
  },
  {
    name: {
      firstName: 'Olamide',
      lastName: 'Baddo',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
    status:'active'
  },
];


const BasicTable = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        Cell: ({ cell }) => {
            return <div className='text-[#273240] text-[13px] font-semibold'>{cell.getValue()}</div>;
        },
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        Cell: ({ cell, table }) => <span>House {cell.getValue()}</span>,
      },
      {
        accessorKey: 'city',
        header: 'City',
        enableClickToCopy: true,
        // Header: <i style={{ color: 'red' }}>City</i>,
        Cell: ({ cell, table }) => <span>House {cell.getValue()}</span>,

      },
      {
        accessorKey: 'state',
        header: 'State',
        Cell: ({ cell, row }) => (
            <div className={`${row.original.state === 'Kentucky' ? 'text-[green]' : null}`}>
              {row.original.state === 'Kentucky'
                ? 'Retired'
                : cell.getValue()}
            </div>
          ),
      },
    ],
    [],
  );

  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };

  const csvExporter = new ExportToCsv(csvOptions);

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };


  return (
        <Section>
            <div className='title bg-white w-full text-[#6A707E] text-2xl'>Recent Customers</div>
            <div className='' onClick={handleExportData}>Export</div>
            <MaterialReactTable 
                state={{ isLoading: false }}
                columns={columns} 
                data={data ?? []} 
                enableColumnActions={true}
                enableRowNumbers
                enableRowActions={true}
                rowNumberMode="original"
                muiTablePaperProps={{
                    elevation: 0,
                    sx: {
                    borderRadius: '0',
                    border: 'none',
                    },
                }}
                muiTableHeadProps={{
                    sx:{
                        backgroundColor:'red',
                    }
                }}
                muiTableBodyProps={{
                    sx: {
                      //stripe the rows, make odd rows a darker color
                      '& tr:nth-of-type(odd)': {
                        //backgroundColor: '#f5f5f5',
                        borderBottom:'2px solid green',
                        borderColor: 'green',
                      },
                      '& thead': {
                        backgroundColor: '#ffffff',
                      },

                      border: '2px solid blue',
                    },
                  }}
                muiTableBodyCellProps={{
                    sx: {
                      //borderRight: '2px solid green', //add a border between columns
                    },
                  }}
                
                muiTableHeadCellProps={{
                    //simple styling with the `sx` prop, works just like a style prop in this example
                    sx: {
                      fontWeight: 'normal',
                      fontSize: '16px',
                      color: '#002333',
                      opacity: '0.5',
                    },
                  }}

                muiTableBodyRowProps={({ row }) => ({
                    onClick: (event) => {
                      //console.info(event, row.id);
                      console.log('clicked '+row.original.address)
                    },
                    sx: {
                      cursor: 'pointer', //you might want to change the cursor too when adding an onClick
                      border: 'none',
                      color:'#273240',
                    },
                  })}
                // renderDetailPanel={({ row }) => (
                //     <div>
                //       <span>First Name: {row.original.name.firstName}</span>
                //       <span>Last Name: {row.original.name.lastName}</span>
                //       <span>Address: {row.original.address}</span>
                //     </div>
                //   )}
                renderRowActionMenuItems={({ closeMenu }) => [
                    <MenuItem
                      key={0}
                      onClick={() => {
                        // View profile logic...
                        closeMenu();
                      }}
                      sx={{ m: 0 }}
                    >
                      <ListItemIcon>
                        <AccountCircle />
                      </ListItemIcon>
                      View Profile
                    </MenuItem>,
                    <MenuItem
                      key={1}
                      onClick={() => {
                        // Send email logic...
                        closeMenu();
                      }}
                      sx={{ m: 0 }}
                    >
                      <ListItemIcon>
                        <Send />
                      </ListItemIcon>
                      Send Email
                    </MenuItem>,
                  ]}
            />
        </Section>
        
    );
};

const Section = styled.section`
    .MuiTableRow-root{
        background-image: linear-gradient(128.03deg, rgba(97, 153, 219, 0.04) -0.78%, rgba(75, 202, 105, 0.04) 90.56%);
        border: 4px solid white !important;
        margin-bottom: 4px !important;
    }
    .MuiTableRow-root:hover{
        //background-color: green;
    }
    
    .MuiTableHead-root{
        color: #ffffff;
    }

    .MuiTableCell-root .MuiTableCell-head{
        color: #002333 !important;
        opacity: 0.5 !important;
    }
  
`

export default BasicTable;
