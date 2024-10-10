
import { fetchStock } from '@/app/lib/data';
import { DataGrid, GridColDef ,GridColumnGroupingModel,GridToolbar} from '@mui/x-data-grid';
import { create } from 'domain';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ลำดับ', width:90 , align: 'center',headerAlign: 'center'},
  { field: 'name', headerName: 'รายชื่อหุ้น', width:120 , align: 'center',headerAlign: 'center'},
  { field: 'amount', headerName: 'จำนวนข้อมูล', width:100 ,headerAlign: 'center', align: 'center'},
  { field: 'type', headerName: 'ประเภท', width:90 ,headerAlign: 'center', align: 'center'},
  { field: 'amount_p80', headerName: '', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'chance_p80', headerName: 'โอกาสเกิดขึ้นต่อวัน', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'amount_p50', headerName: '', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'chance_p50', headerName: 'โอกาสเกิดขึ้นต่อวัน', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'amount_p20', headerName: '', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'chance_p20', headerName: 'โอกาสเกิดขึ้นต่อวัน', flex: 1 ,headerAlign: 'center', align: 'center'},
  { field: 'create_date', headerName: 'สร้าง', width:120 , align: 'center',headerAlign: 'center'},
  { field: 'update_date', headerName: 'อัพเดท', width:120 , align: 'center',headerAlign: 'center'},
  { field: 'create_by', headerName: 'โดย', width:100 , align: 'center',headerAlign: 'center'},
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'Yp80',
    description: '',
    children: [{ field: 'amount_p80' }, { field: 'chance_p80' }],
    headerAlign: 'center',
  },
  {
    groupId: 'Yp50',
    description: '',
    children: [{ field: 'amount_p50' }, { field: 'chance_p50' }],
    headerAlign: 'center',
  },
  {
    groupId: 'Yp20',
    description: '',
    children: [{ field: 'amount_p20' }, { field: 'chance_p20' }],
    headerAlign: 'center',
  },
];

export default async function StockField({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const StockField = await fetchStock();
  console.log(StockField);

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <DataGrid
        rows={StockField.map(stock => ({
          id: stock.id, 
          name: stock.name,
          amount: stock.amount,
          type: (stock.prefix === "minus"?"-y":(stock.prefix === "minush"?"-yH":(stock.prefix === "plus"?"y":"yH"))),
          amount_p80: ((stock.prefix === "minus" || stock.prefix === "minush") ? "-" : "") + stock.yp_80 + stock.y_unit,
          amount_p50: ((stock.prefix === "minus" || stock.prefix === "minush") ? "-" : "") + stock.yp_50 + stock.y_unit,
          amount_p20: ((stock.prefix === "minus" || stock.prefix === "minush") ? "-" : "") + stock.yp_20 + stock.y_unit,
          chance_p80: stock.chance_80,
          chance_p50: stock.chance_50,
          chance_p20: stock.chance_20,
          create_date: stock.create_date,
          update_date: stock.update_date,
          create_by: stock.create_by,
        }))}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
        columnGroupHeaderHeight={36}
        initialState={{
          sorting: {
            sortModel: [{ field: 'id', sort: 'desc' }],
          },
        }}
      />
    </div>
  );
}