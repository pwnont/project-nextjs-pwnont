## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

# Project Name

## Project Structure
project-root/ ├── public/ │ ├── index.html │ └── ... ├── src/ │ ├── components/ │ │ ├── ComponentName/ │ │ │ ├── ComponentName.tsx │ │ │ ├── ComponentName.test.tsx │ │ │ ├── ComponentName.module.css │ │ │ └── index.ts │ ├── pages/ │ │ ├── PageName/ │ │ │ ├── PageName.tsx │ │ │ ├── PageName.test.tsx │ │ │ ├── PageName.module.css │ │ │ └── index.ts │ ├── utils/ │ │ ├── utilFunction.ts │ │ └── utilFunction.test.ts │ ├── App.tsx │ ├── index.tsx │ └── ... ├── tests/ │ ├── setupTests.ts │ └── ... ├── .gitignore ├── package.json ├── tsconfig.json ├── jest.config.js └── README.md

## Conventions

### File Naming

- **Components**: Use PascalCase for component names and their files. Example: `ComponentName.tsx`.
- **Pages**: Use PascalCase for page names and their files. Example: `PageName.tsx`.
- **Utility Functions**: Use camelCase for utility function files. Example: `utilFunction.ts`.

### Directory Structure

- **components/**: Contains all reusable components. Each component should have its own directory containing the component file, its styles, and tests.
- **pages/**: Contains all page components. Each page should have its own directory containing the page file, its styles, and tests.
- **utils/**: Contains utility functions and helpers.
- **tests/**: Contains global test setup and configuration files.

### Coding Standards

- **TypeScript**: Use TypeScript for type safety.
- **CSS Modules**: Use CSS Modules for styling components to avoid global scope issues.
- **Testing**: Use Jest and React Testing Library for unit tests. Place test files next to the files they are testing and name them with a `.test.tsx` or `.test.ts` extension.

### Example Usage

```tsx
// src/components/ExampleComponent/ExampleComponent.tsx
import React from 'react';
import styles from './ExampleComponent.module.css';

const ExampleComponent: React.FC = () => {
  return <div className={styles.example}>Hello, World!</div>;
};

export default ExampleComponent;

// src/components/ExampleComponent/ExampleComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders Hello, World!', () => {
  const { getByText } = render(<ExampleComponent />);
  expect(getByText('Hello, World!')).toBeInTheDocument();
});