"use client"
// components/DataGridComponent.tsx
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetter } from '@mui/x-data-grid';
import { fetchStock } from '@/app/lib/data';
import { StockField } from '@/app/lib/definitions';

interface RowData {
  id: number;
  name: string;
  age: number;
}

const initialRows: RowData[] = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Johnson', age: 28 },
];

//const stock = fetchStock();
//console.log(stock)

const DataGridComponent: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>(initialRows);

  const handleProcessRowUpdate = (newRow: RowData) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row));
    setRows(updatedRows);
    return newRow; // Return the updated row to finalize the update
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row" // Enables row editing
      />
    </div>
  );
};

const Page = async () => {
    return (
      <div>
        <h1>My Page</h1>
        {/* <fetchStock /> */}
      </div>
    );
  };
  
export default Page;

//export default DataGridComponent;
// export default function dataCom({
//     fetchStock
//   }: {
//     fetchStock: StockField
//   }){
//     return (
//         <div style={{ height: 400, width: '100%' }}>
//           <fetchStock />
//         </div>
//       );    
//   }