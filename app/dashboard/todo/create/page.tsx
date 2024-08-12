import Form from '@/app/ui/todo/create-form';
import Breadcrumbs from '@/app/ui/todo/breadcrumbs';
import { fetchTodo } from '@/app/lib/data';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
 
export default async function Page() {
  const todo = await fetchTodo();

  const cookieStore = cookies()
    const hasCookie = cookieStore.has('token')

    if (!hasCookie) {
      redirect('/login');
    }
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'todo', href: '/dashboard/todo' },
          {
            label: 'Create Todo',
            href: '/dashboard/todo/create',
            active: true,
          },
        ]}
      />
      <Form todo={todo} />
    </main>
  );
}