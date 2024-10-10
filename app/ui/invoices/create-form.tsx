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
 return  (<form action={searchStock}>
        <div className="relative flex items-center space-x-2">
            <div className="relative w-full">
                <select
                    id="customer"
                    name="customerId"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500"
                    defaultValue=""
                >
                    <option value="" disabled>
                        เลือกรายชื่อหุ้น
                    </option>
                    {stock.map((stock) => (
                        <option key={stock.id} value={stock.id}>
                            {(stock.prefix === "minus"?"-y":(stock.prefix === "minush"?"-yH":(stock.prefix === "plus"?"y":"yH"))) + ' ' + stock.name}
                        </option>
                    ))}
                </select>
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <Button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Search
            </Button>
        </div>
    </form>)
    ;
}
