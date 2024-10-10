import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { createStock } from '@/app/lib/actions';
import StockField from '@/app/dashboard/customers/stock';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest) {
    if (req.method.toLowerCase() === 'post') {
        const formData = await req.formData();
        const file = formData.get('file');

        if (file && file instanceof File) {
            // Create a buffer from the file
            const arrayBuffer = await file.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' }); // Read the Excel file

            const sheetName = workbook.SheetNames[0]; // Get the first sheet name
            const worksheet = workbook.Sheets[sheetName]; // Get the first sheet
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Convert to array

            data.forEach(async (row: any, index: number) => {
                if (index > 2) {
                    await createStock(row);
                }
            });
            await StockField({ searchParams: { query: 'stock' } });
            return NextResponse.json(data); // Return the parsed data
        } else {
            return NextResponse.json({ error: 'No file uploaded or file is not valid' }, { status: 400 });
        }
    }
    
    return new NextResponse('Method not allowed', { status: 405 });
}