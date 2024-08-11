## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

# Project Name

## Project Structure
nextjs-dashboard/
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .next/
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── cache/
│   ├── package.json
│   ├── react-loadable-manifest.json
│   ├── server/
│   ├── static/
│   └── trace
├── api/
│   └── auth.ts
├── app/
│   ├── api/
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── invoices/
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── [id]/
│   │   │   │   ├── edit/
│   │   │   │   │   ├── not-found.tsx
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── page copy.tsx
│   │   │   ├── error.tsx
│   │   │   └── page.tsx
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   ├── (overview)/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   ├── lib/
│   │   └── data.ts
│   ├── logictest/
│   ├── login/
├── auth.config.ts
├── auth.ts
├── logictest.ts
├── middleware.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public/
├── README.md
├── tailwind.config.ts
├── test/
└── tsconfig.json

## Conventions

### File Naming

- **Components**: Use PascalCase for component names and their files. Example: `ComponentName.tsx`.
- **Pages**: Use PascalCase for page names and their files. Example: `PageName.tsx`.
- **Utility Functions**: Use camelCase for utility function files. Example: `utilFunction.ts`.

### Directory Structure

- **api/**: Contains API route handlers.
- **app/**: Contains the main application code, including pages, components, and utilities.
  - **dashboard/**: Contains dashboard-related pages and components.
  - **lib/**: Contains utility functions and helpers.
  - **logictest/**: Contains logic test files.
  - **login/**: Contains login-related pages and components.
- **public/**: Contains static assets like images and fonts.
- **test/**: Contains global test setup and configuration files.

### Coding Standards

- **TypeScript**: Use TypeScript for type safety.
- **CSS Modules**: Use CSS Modules for styling components to avoid global scope issues.
- **Testing**: Use Jest and React Testing Library for unit tests. Place test files next to the files they are testing and name them with a `.test.tsx` or `.test.ts` extension.

// app/dashboard/invoices/[id]/edit/page.tsx
import React from 'react';
import styles from './page.module.css';

const EditInvoicePage: React.FC = () => {
  return <div className={styles.container}>Edit Invoice</div>;
};

export default EditInvoicePage;

// app/dashboard/invoices/[id]/edit/page.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import EditInvoicePage from './page';

test('renders Edit Invoice', () => {
  const { getByText } = render(<EditInvoicePage />);
  expect(getByText('Edit Invoice')).toBeInTheDocument();
});