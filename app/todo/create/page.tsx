import Form from '@/app/ui/todo/create-form';
import Breadcrumbs from '@/app/ui/todo/breadcrumbs';
import { fetchTodo } from '@/app/lib/data';
 
export default async function Page() {
  const todo = await fetchTodo();
 
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