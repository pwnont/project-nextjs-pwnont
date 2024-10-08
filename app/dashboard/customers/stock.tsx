import { fetchStock } from '@/app/lib/data';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

interface RowData {
    id: number;
    name: string;
    age: number;
  }

  const rows: RowData[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 28 },
  ];
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  ];

export default async function StockField() {
    const StockField = await fetchStock();
    console.log(StockField[0].name);
    
    const rows: RowData[] = [
        { id: 1, name: StockField[0].name, age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Alice Johnson', age: 28 },
      ];
      
    return (
      <div className="flex w-full flex-col md:col-span-4">
        <DataGrid
          rows={rows}
          columns={columns}
        />  
      </div>
    );
  }