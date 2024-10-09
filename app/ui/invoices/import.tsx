'use client';

import { StockDataField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice ,searchStock} from '@/app/lib/actions';
import { useActionState } from 'react';
import {DatePicker} from "@nextui-org/date-picker";

export default function Import({ stock }: { stock: StockDataField[] }) {
  return <form action={searchStock}>
    <div className="mt-2 flex justify-end gap-4">
      <Button type="submit">Import</Button>
    </div>
  </form>;
}
