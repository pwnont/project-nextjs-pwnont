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
      ON d.stock_id = ${String(rawFormData.customerId)};
    `;

  const stock = data.rows;
  console.log(stock, rawFormData.customerId)
  return stock;
}

export async function getStockById(name: string) {
  const data = await sql`
      SELECT *
      FROM stock where name = ${name};
    `;

  const stock = data.rows;
  return stock[0];
}

export async function getYParamById(prefix: string) {
  const data = await sql`
      SELECT *
      FROM y_param where prefix = ${prefix};
    `;

  const stock = data.rows;
  return stock[0];
}


export async function createStock(data: { [key: string]: any }) {
  if (!data) {
    throw new Error('No data provided');
  }

  const stockMaster = await getStockById(data[1]);
    let thePrefix = 'plus';
    if (data[2] === '-') {
      thePrefix = 'minus';
    } else if (data[3] === '-h') {
      thePrefix = 'minush';
    } else if (data[4] === '+h') {
      thePrefix = 'plush';
    } else {
      thePrefix = 'plus';
    }
  
  const yParam = await getYParamById(thePrefix);

  if (data[0]) {
    try {
      await sql`
      UPDATE data set y_param_id=${yParam.id}, yp_80=${data[3]}, yp_50=${data[4]}, yp_20=${data[5]}, chance_80=${data[6]}, chance_50=${data[7]}, chance_20=${data[8]}, amount=${data[9]}, update_date=${new Date().toISOString()} where id=${data[0]};`;
    } catch (error) {
      console.error('Error inserting data:', error);
      throw new Error('Failed to create stock entry');
    }
  } else {
    try {
      await sql`
      INSERT INTO data (
        id,
        y_param_id,
        yp_80,
        yp_50,
        yp_20,
        chance_80,
        chance_50,
        chance_20,
        amount,
        create_date,
        update_date,
        create_by,
        update_by,
        stock_id
      ) VALUES (
        Default,
        ${yParam.id},
        ${data[3]},
        ${data[4]},
        ${data[5]},
        ${data[6]},
        ${data[7]},
        ${data[8]},
        ${data[9]},
        ${new Date().toISOString()},
        ${new Date().toISOString()},
        'admin',
        'admin',
        ${stockMaster.id}
      );
    `;
    } catch (error) {
      console.error('Error inserting data:', error);
      throw new Error('Failed to create stock entry');
    }
  }
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