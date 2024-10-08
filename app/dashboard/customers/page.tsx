import React from 'react';
import DataGridComponent from '@/app/dashboard/customers/DataGridComponent';
import StockField from '@/app/dashboard/customers/stock';


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
      <h1>Simple Data Grid</h1>
      <StockField />
    </div>
  );
};

export default Home;