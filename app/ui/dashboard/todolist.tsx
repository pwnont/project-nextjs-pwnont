import React from 'react'; // Add this line

import Image from 'next/image';
import { UpdateTodo, DeleteTodo } from '@/app/ui/todo/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocalTodo } from '@/app/lib/utils';
import { fetchFilteredTodo } from '@/app/lib/data';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default async function TodoTable() {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('token')
  const access_token = cookieStore.get('token')

    if (!hasCookie) {
      redirect('/login');
    }

  const res = await fetch('https://candidate-assignment.neversitup.com/todo/all', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization' : 'Bearer '+(access_token?.value ?? '')
    },
    mode: 'no-cors'
  })

  const datas = await res.json()

  return (
    <div className="flex w-full flex-col lg:col-span-4">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-sm font-normal">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <th scope="col" className="px-3 py-5 font-medium">
                  no
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  created date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {datas.data?.map((data: any) => (
                data.created_by?.username === 'popwuttichai' &&
                <tr
                  key={data.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="px-3 py-5 font-medium">
                    {data.no}
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    {data.title}
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    {data.description}
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    {data.created_at}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
