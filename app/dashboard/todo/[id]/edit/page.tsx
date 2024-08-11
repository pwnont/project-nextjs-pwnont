import Form from '@/app/ui/todo/edit-form';
import Breadcrumbs from '@/app/ui/todo/breadcrumbs';
import { fetchTodoById} from '@/app/lib/data';
import { updateTodo } from '@/app/lib/actions';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [todo] = await Promise.all([
        fetchTodoById(id)
    ]);

    console.log(todo);

    if (!todo) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Todo', href: '/dashboard/todo' },
                    {
                        label: 'Edit Todo',
                        href: `/dashboard/todo/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form todo={todo}/>
        </main>
    );
}