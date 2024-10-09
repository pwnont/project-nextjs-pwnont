// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UserWeb = {
  username: string;
  access_token: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
  dateFrom:Date;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type TodoForm = {
  id: string;
  title: string;
  description: string;
};

export type SearchForm = {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  name:string;
};

export type StockField = {
  id: number;         // Unique identifier
  no: number;          // ลำดับ
  name: string;       // รายชื่อหุ้น
  amount: string;     // จำนวนข้อมูล
  amount_p80: string;        // -Y = -YP80
  amount_p50: string;        // -Y = -YP50
  amount_p20: string;        // -Y = -YP20
  chance_p80: string;        // -Y = -YP20
  chance_p50: string;        // -Y = -YP20
  chance_p20: string;        // -Y = -YP20
};

export type StockDataField = {
  amount: string;
  chance_50: number;
  chance_80: number;
  change_20: number;
  create_by: string | null;
  create_date: Date;
  date: Date;
  id: number;
  name: string;
  prefix: string;
  stock_id: number;
  unit: string;
  update_by: string | null;
  update_date: Date;
  y_param_id: number;
  y_unit: string;
  yp_20: string;
  yp_50: string;
  yp_80: string;
};