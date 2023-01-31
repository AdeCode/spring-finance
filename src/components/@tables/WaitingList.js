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
import cus1 from '../../images/dashboard/cus1.png'
import cus2 from '../../images/dashboard/cus2.png'
import cus3 from '../../images/dashboard/cus3.png'
import IosShareIcon from '@mui/icons-material/IosShare';


//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    {
        name: 'Adewale Olowookere',
        email: 'adewale@gmail.com',
        phone: '08033889900',
        dateJoined: '17/12/2022',
        location: 'Nigeria',
        avatar: cus1
    },
    {
        name: 'Efe Adegoke',
        email: 'efe@gmail.com',
        phone: '08122009933',
        dateJoined: '22/12/2022',
        location: 'Sudan',
        avatar: cus2

    },
    {
        name: 'Muideen Osoala',
        email: 'osoala@yahoo.com',
        phone: '07022883399',
        dateJoined: '01/01/2023',
        location: 'Canada',
        avatar: cus3
    },
    {
        name: 'Muideen Osoala',
        email: 'osoala@yahoo.com',
        phone: '07022883399',
        dateJoined: '01/01/2023',
        location: 'Canada',
        avatar: cus1
    },
    {
        name: 'Muideen Osoala',
        email: 'osoala@yahoo.com',
        phone: '07022883399',
        dateJoined: '01/01/2023',
        location: 'Canada',
        avatar: cus2
    },
];


const WaitingListTable = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //normal accessorKey
                header: 'Customer',
                Cell: ({ cell }) => {
                    return <div className="text-[#273240] font-semibold">{cell.getValue()}</div>
                },
            },
            {
                accessorKey: 'email', //normal accessorKey
                header: 'Email address',
            },
            {
                accessorKey: 'phone',
                header: 'Phone number',
            },
            {
                accessorKey: 'dateJoined',
                header: 'Date joined',
                enableClickToCopy: true,
            },
            {
                accessorKey: 'location',
                header: 'Location',
            },
            //   {
            //     accessorKey: 'state',
            //     header: 'State',
            //     Cell: ({ cell, row }) => (
            //         <div className={`${row.original.state === 'Kentucky' ? 'text-[green]' : null}`}>
            //           {row.original.state === 'Kentucky'
            //             ? 'Retired'
            //             : cell.getValue()}
            //         </div>
            //       ),
            //   },
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
            {/* <div className='title bg-white w-full text-[#334D6E] text-base pl-[18px] pt-5'>Recent Customers</div> */}
            {/* <div className='' onClick={handleExportData}>Export</div> */}
            <MaterialReactTable
                state={{ isLoading: false }}
                columns={columns}
                data={data ?? []}
                enableColumnActions={true}
                enableRowNumbers
                rowNumberMode="original"
                muiTablePaperProps={{
                    elevation: 0,
                    sx: {
                        borderRadius: '0',
                        border: 'none',
                    },
                }}
                renderTopToolbarCustomActions={() => (
                    <Box sx={{display:'flex',paddingTop: '20px', alignItems:'center', gap:'10px'}}>
                        <Typography color="#334D6E" variant="h2" sx={{ fontSize: '16px', paddingLeft: '12px' }}>
                            Waiting List Members
                        </Typography>
                        <span className='bg-[#EFF0F2] py-1 px-3 cursor-pointer text-[13px] flex items-center gap-2' onClick={handleExportData}>
                            <IosShareIcon sx={{ fontSize: 14 }}/> Export
                        </span>
                    </Box>

                )}
                muiTableHeadProps={{
                    sx: {
                        backgroundColor: 'red',
                    }
                }}
                muiTableBodyProps={{
                    sx: {
                        //stripe the rows, make odd rows a darker color
                        '& tr:nth-of-type(odd)': {
                            //backgroundColor: '#f5f5f5',
                            borderBottom: '2px solid green',
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
                        color: '#273240',
                        fontSize: '13px',
                    },
                }}

                muiTableHeadCellProps={{
                    //simple styling with the `sx` prop, works just like a style prop in this example
                    sx: {
                        fontWeight: 'normal',
                        fontSize: '12px',
                        color: '#002333',
                        opacity: '0.5',
                    },
                }}

                muiTableBodyRowProps={({ row }) => ({
                    onClick: (event) => {
                        //console.info(event, row.id);
                        console.log('clicked ' + row.original.address)
                    },
                    sx: {
                        cursor: 'pointer', //you might want to change the cursor too when adding an onClick
                        border: 'none',
                        color: '#273240',
                        paddingLeft: '10px'
                    },
                })}
            // renderDetailPanel={({ row }) => (
            //     <div>
            //       <span>First Name: {row.original.name.firstName}</span>
            //       <span>Last Name: {row.original.name.lastName}</span>
            //       <span>Address: {row.original.address}</span>
            //     </div>
            //   )}

            />
        </Section>

    );
};

const Section = styled.section`
    .MuiTableRow-root{
        background-image: linear-gradient(128.03deg, rgba(97, 153, 219, 0.04) -0.78%, rgba(75, 202, 105, 0.04) 90.56%);
        border: 4px solid white !important;
        margin-bottom: 4px !important;
        padding-left: 20px !important;
    }
    .MuiTableRow-root:hover{
        //background-color: green;
    }
    
    .MuiTableCell-root .MuiTableCell-head{
        color: #002333 !important;
        opacity: 0.5 !important;
    }
  
`

export default WaitingListTable;
