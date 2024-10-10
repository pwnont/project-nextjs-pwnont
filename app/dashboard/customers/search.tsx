import Form from '@/app/ui/invoices/create-form';
import { fetchCustomers, fetchMasterStock } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchMasterStock();

  return (<Form stock={customers} />
  );
}