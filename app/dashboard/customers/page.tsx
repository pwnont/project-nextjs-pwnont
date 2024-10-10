"use client"
import React, { useState } from 'react';
import DataGridComponent from '@/app/dashboard/customers/DataGridComponent';
import StockField from '@/app/dashboard/customers/stock';
import Search from '@/app/dashboard/customers/search';
import Import from '@/app/dashboard/customers/import';
import Form from '@/app/ui/invoices/create-form';

const Home: React.FC = () => {

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      //console.log('Selected file:', file);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/dashboard/customers/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const jsonData = await response.json();
    }
  };

  return (
    <div>
      {/* <Search /> */}
      {/* <h2>กราฟ 15 วินาที ค่า -y</h2> */}
      {/* <StockField /> */}

      {/* File Upload Section */}
      <div>
        <input 
          type="file" 
          accept=".xlsx, .xls" 
          onChange={handleFileUpload} 
        />
      </div>
    </div>
  );
};

export default Home;
