'use client';

import { CustomerField, InvoiceForm,TodoForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateTodo, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function EditTodoForm({
  todo
}: {
  todo: TodoForm
}) {
  const initialState: State = { message: null, errors: null };
  const updateTodoWithId = updateTodo.bind(null, todo.id);
  const [state, formAction] = useActionState(updateTodoWithId, initialState);
  return <form action={formAction}>
  <div className="rounded-md bg-gray-50 p-4 md:p-6">
    {/* Invoice Amount */}
    <div className="mb-4">
      <label htmlFor="amount" className="mb-2 block text-sm font-medium">
        Choose an amount
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="id"
            name="id"
            type="hidden"
            defaultValue={todo.id}
            placeholder="Enter Title"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={todo.title}
            placeholder="Enter Title"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="description"
            name="description"
            type="text"
            defaultValue={todo.description}
            placeholder="Enter description"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="mt-6 flex justify-end gap-4">
    <Link
      href="/dashboard/todo"
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    >
      Cancel
    </Link>
    <Button type="submit">Edit Invoice</Button>
  </div>
</form>;
}
