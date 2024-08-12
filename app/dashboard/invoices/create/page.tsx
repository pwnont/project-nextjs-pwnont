//import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
 
export default async function Page() {
  const customers = await fetchCustomers();
  const cookieStore = cookies()
    const hasCookie = cookieStore.has('token')

    if (!hasCookie) {
      redirect('/login');
    }
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      {/* <Form customers={customers} /> */}
    </main>
  );
}