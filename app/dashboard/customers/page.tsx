import React from 'react';
import DataGridComponent from '@/app/dashboard/customers/DataGridComponent';
import StockField from '@/app/dashboard/customers/stock';
import Search from '@/app/dashboard/customers/search';
import Import from '@/app/dashboard/customers/import';
import Form from '@/app/ui/invoices/create-form';

// export default async function Page() {
//     const stock = await fetchStock();
//     console.log(stock)
//     const Home: React.FC = () => {
//       return (
//         <div>
//           <h1>Data Grid with Inline Editing</h1>
//           <DataGridComponent />
//         </div>
//       );
//     };
//     //return <p>Customers Page</p>;
//   }

const Home: React.FC = () => {
  return (
    <div>
      {/* <h1>ค่า Y ที่อยู่ในช่วงขาขึ้น ข้อมูลตั้งแต่วันที่ 8 เม.ย. 2567 - 31 ก.ค. 2567 (80 วันเทรด)</h1> */}
      <Search />
      <hr></hr>
      <h2>กราฟ 15 วินาที ค่า -y</h2>
      <StockField />
      {/* <hr></hr>
      <h2>กราฟ 15 วินาที ค่า +y</h2>
      <StockField />
      <hr></hr>
      <h2>กราฟ 15 วินาที ค่า -Yh</h2>
      <StockField />
      <hr></hr>
      <h2>กราฟ 15 วินาที ค่า -Yh</h2>
      <StockField /> */}
    </div>
  );
};

export default Home;