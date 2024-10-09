'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import {
  StockDataField
} from './definitions';
 
export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
    dateFrom:formData.get('dateFrom')
  };
  // Test it out:
  console.log(rawFormData);
}

export async function searchStock(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId')
  };
  // Test it out:
  const data = await sql<StockDataField>`
      SELECT *
      FROM data AS d
      LEFT JOIN y_param AS yp 
      ON d.y_param_id = yp.id
      LEFT JOIN stock AS st 
      ON d.stock_id = ${rawFormData.customerId};
    `;

    const stock = data.rows;
    console.log(stock,rawFormData.customerId)
    return stock;
}
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
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