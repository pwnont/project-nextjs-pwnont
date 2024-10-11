//"use client"
import React, { useState } from 'react';
import StockField from '@/app/dashboard/customers/stock';
import Search from '@/app/dashboard/customers/search';
import Import from '@/app/ui/invoices/import';
import Form from '@/app/ui/invoices/create-form';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* <Search /> */}
      <Import />
      {/* <Search /> */}
      <Suspense fallback={<RevenueChartSkeleton />}>
      <StockField searchParams={{ query: "value" }} />
      </Suspense>
    </div>
  );
}
