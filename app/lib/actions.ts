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
    dateFrom: formData.get('dateFrom')
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
  console.log(stock, rawFormData.customerId)
  return stock;
}

export async function createStock(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId')
  };
  // Test it out:
//   await sql<StockDataField>`
//       INSERT INTO data (
//     amount,
//     chance_50,
//     chance_80,
//     change_20,
//     create_by,
//     create_date,
//     date,
//     id,
//     name,
//     prefix,
//     stock_id,
//     unit,
//     update_by,
//     update_date,
//     y_param_id,
//     y_unit,
//     yp_20,
//     yp_50,
//     yp_80
// ) VALUES (
//     377,
//     2.4,
//     3.8,
//     0.9,
//     'pop',
//     '2024-10-08 15:47:10',
//     '2024-10-08 00:00:00',
//     2,
//     'TQQQ',
//     'minus',
//     2,
//     'second',
//     'pop',
//     '2024-10-08 15:47:10',
//     1,
//     '%',
//     1.1,
//     0.6,
//     0.5
// );
//     `;

// await sql`
//       INSERT INTO y_param (id,stock_id,date,prefix)
//       VALUES (DEFAULT,3,NOW(),'minus');
//     `;
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