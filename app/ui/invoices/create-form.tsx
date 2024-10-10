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
import { createInvoice, searchStock } from '@/app/lib/actions';
import { useActionState } from 'react';
import { DatePicker } from "@nextui-org/date-picker";

export default function Form({ stock }: { stock: StockDataField[] }) {
    return <form action={searchStock}>
        <div className="relative flex">
            <select
                id="customer"
                name="customerId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
            >
                <option value="" disabled>
                    เลือกรายชื่อหุ้น
                </option>
                {stock.map((stock) => (
                    <option key={stock.id} value={stock.id}>
                        {stock.prefix+' '+stock.name}
                    </option>
                ))}
            </select>
            <Button type="submit">Search</Button>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
    </form>
    ;
}
