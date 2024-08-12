'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { cp } from 'fs';
import { describe } from 'node:test';
import { title } from 'process';
import { platform } from 'os';

const FormSchema = z.object({
  id: z.string(),
  // todoId: z.string(),
  // customerId: z.string({
  //   invalid_type_error: 'Please select a customer.',
  // }),
  // amount: z.coerce
  //   .number()
  //   .gt(0, { message: 'Please enter an amount greater than $0.' }),
  // status: z.enum(['pending', 'paid'], {
  //   invalid_type_error: 'Please select an invoice status.',
  // }),
  // date: z.string(),
  title: z.string({
    invalid_type_error: 'Please select Title.',
  }),
  description: z.string(),
});

// const CreateInvoice = FormSchema.omit({ id: true, date: true });
// const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const CreateTodo = FormSchema.omit({ id: true, title: true,description: true });  
const UpdateTodo = FormSchema.omit({ id: true, title: true,description: true });

export type State = {
  errors?: string | null;
  message?: string | null;
};


// export async function createInvoice(prevState: State, formData: FormData) {
//   const validatedFields = CreateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Create Invoice.',
//     };
//   }

//   const { customerId, amount, status } = CreateInvoice.parse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   const amountInCents = amount * 100;
//   const date = new Date().toISOString().split('T')[0];

//   try {
//     await sql`
//           INSERT INTO invoices (customer_id, amount, status, date)
//           VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//         `;
//   } catch (error) {
//     return {
//       message: 'Database Error: Failed to Create Invoice.',
//     };
//   }

//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');

//   //const rawFormData = Object.fromEntries(formData.entries())
//   // Test it out:
//   //console.log(typeof rawFormData.amount);
// }

// export async function updateInvoice(
//   id: string,
//   prevState: State,
//   formData: FormData,
// ) {
//   const validatedFields = UpdateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update Invoice.',
//     };
//   }

//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;

//   try {
//     await sql`
//         UPDATE invoices
//         SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//         WHERE id = ${id}
//       `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update Invoice.' };
//   }

//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }

// export async function deleteInvoice(id: string) {
//   try {
//     await sql`DELETE FROM invoices WHERE id = ${id}`;
//     revalidatePath('/dashboard/invoices');
//     return { message: 'Deleted Invoice.' };
//   } catch (error) {
//     return { message: 'Database Error: Failed to Delete Invoice.' };
//   }
// }

export async function createTodo(prevState: State,payload: FormData) {
  //const rawFormData = Object.fromEntries(payload.entries())
  // Test it out:
  //console.log(rawFormData);

  // const validatedFields = CreateTodo.safeParse({
  //   title: payload.get('title'),
  //   description: payload.get('description')
  // });

  //console.log(validatedFields);

  // if (!validatedFields.success) {
  //   return {
  //     errors: 'Missing Fields. Failed to Create Todo.',
  //     message: 'Missing Fields. Failed to Create Todo.',
  //   };
  // }
  
  // const { title, description } = CreateTodo.parse({
  //   title: payload.get('title'),
  //   description: payload.get('description')
  // });

  const tosolist = {
    "title": payload.get('title'),
    "description": payload.get('description')
  };
  
  console.log(tosolist);

  try {
    const res = await fetch('https://candidate-assignment.neversitup.com/todo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization' : 'Bearer '+process.env.NEXT_PUBLIC_API_KEY
    },
      body: JSON.stringify(tosolist)
    })

    const data1 = await res.json()
    //console.log(data1);
   
    //return Response.json(data1)
  } catch (error) {
    return {
      errors: 'Database Error: Failed to Create Todo.',
      message: 'Database Error: Failed to Create Todo.',
    };
  }

  revalidatePath('/dashboard/todo');
  redirect('/dashboard/todo');
}

export async function updateTodo(
  id: string,
  prevState: State,
  formData: FormData,
) {
  // const validatedFields = UpdateTodo.safeParse({
  //   id: formData.get('id'),
  //   title: formData.get('title'),
  //   description: formData.get('description')
  // });

  // if (!validatedFields.success) {
  //   return {
  //     errors: 'Missing Fields. Failed to Create Invoice.',
  //     message: 'Missing Fields. Failed to Create Invoice.',
  //   };
  // }

  // interface Todo {
  //   todoId: string;
  //   title: string;
  //   description: string;
  // }
  
  // const { title, description } = CreateTodo.parse({
  //   title: payload.get('title'),
  //   description: payload.get('description')
  // }) as Todo;

  // const { todoId,title, description } = UpdateTodo.parse({
  //   todoId: formData.get('id'),
  //   title: formData.get('title'),
  //   description: formData.get('description')
  // }) as Todo;

  try {
    const tosolist = {
      "id": formData.get('id'),
      "title": formData.get('title'),
      "description": formData.get('description')
    };

    const res = await fetch('https://candidate-assignment.neversitup.com/todo/'+id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
       'authorization' : 'Bearer '+process.env.NEXT_PUBLIC_API_KEY
    },
      body: JSON.stringify(tosolist)
    })

    const data1 = await res.json()
   
    //return Response.json(data1)
  } catch (error) {
    return {
      errors: 'Database Error: Failed to Create Invoice.',
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/todo');
  redirect('/dashboard/todo');
}

export async function deleteTodo(id: string) {
  try {
    const res = await fetch('https://candidate-assignment.neversitup.com/todo/'+id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization' : 'Bearer '+process.env.NEXT_PUBLIC_API_KEY
    }
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/todo');
  redirect('/dashboard/todo');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  //const rawFormData = Object.fromEntries(formData.entries())
  // Test it out:
  //console.log(rawFormData);
  //const rawFormData = await signIn('credentials', formData);
  //console.log(rawFormData);
  //console.log('2222222');
  try {
    await signIn('credentials', formData);
    //console.log(rawFormData.u);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}