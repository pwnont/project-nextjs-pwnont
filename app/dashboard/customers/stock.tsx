import { fetchStock } from '@/app/lib/data';
import { DataGrid, GridColDef ,GridColumnGroupingModel} from '@mui/x-data-grid';

interface RowData {
  id: number;         // Unique identifier
  no: number;          // ลำดับ
  name: string;       // รายชื่อหุ้น
  amount: string;     // จำนวนข้อมูล
  amount_p80: string;        // -Y = -YP80
  amount_p50: string;        // -Y = -YP50
  amount_p20: string;        // -Y = -YP20
  chance_p80: string;        // -Y = -YP20
  chance_p50: string;        // -Y = -YP20
  chance_p20: string;        // -Y = -YP20
}

const columns: GridColDef[] = [
  { field: 'no', headerName: 'ลำดับ', width:90 , align: 'center',headerAlign: 'center'},
  { field: 'name', headerName: 'รายชื่อหุ้น', width:100 , align: 'center',headerAlign: 'center'},
  { field: 'amount', headerName: 'จำนวนข้อมูล', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'amount_p80', headerName: 'จำนวนข้อมูล', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'chance_p80', headerName: 'โอกาสเกิดขึ้นต่อวัน', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'amount_p50', headerName: 'จำนวนข้อมูล', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'chance_p50', headerName: 'โอกาสเกิดขึ้นต่อวัน', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'amount_p20', headerName: 'จำนวนข้อมูล', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'chance_p20', headerName: 'โอกาสเกิดขึ้นต่อวัน', flex: 1 ,headerAlign: 'center', align: 'center'},
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'yp80',
    description: '',
    children: [{ field: 'amount_p80' }, { field: 'chance_p80' }],
  },
  {
    groupId: 'yp50',
    description: '',
    children: [{ field: 'amount_p50' }, { field: 'chance_p50' }],
  },
  {
    groupId: 'yp20',
    description: '',
    children: [{ field: 'amount_p20' }, { field: 'chance_p20' }],
  },
];

export default async function StockField() {
  const StockField = await fetchStock();
  console.log(StockField);

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <DataGrid
        rows={StockField.map(stock => ({
          id: stock.id, // Assuming 'no' is unique and can be used as an id
          no: stock.id,
          name: stock.name,
          amount: stock.amount,
          amount_p80: ((stock.prefix === "minus" || stock.prefix === "minush") ? "-" : null) + stock.yp_80 + stock.y_unit,
          amount_p50: ((stock.prefix === "minus" || stock.prefix === "minush") ? "-" : null) + stock.yp_50 + stock.y_unit,
          amount_p20: ((stock.prefix === "minus" || stock.prefix === "minush") ? "-" : null) + stock.yp_20 + stock.y_unit,
          chance_p80: stock.chance_80,
          chance_p50: stock.chance_50,
          chance_p20: stock.change_20,
        }))}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
        columnGroupHeaderHeight={36}
      />
    </div>
  );
}