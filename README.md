# Next.js Form App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) that demonstrates form handling and user management.

## Features

- User registration form with validation using React Hook Form and Yup
- User profile management (view, edit, delete)
- State management with Zustand
- Styled components for UI styling
- API integration with external JSON server

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project has been migrated from a React Router (v6/v7) structure to Next.js App Router. The main changes include:

- React Router routes have been converted to Next.js file-based routing
- Components are now organized in the `/app` directory following Next.js conventions
- Route parameters use the `[param]` syntax instead of the `:param` syntax
- Links use Next.js `Link` component instead of React Router's

### Key Directories and Files

- `/app` - Main application code with Next.js App Router structure
  - `/components` - Reusable UI components
  - `/form` - User registration page
  - `/profile` - User profile management page
- `/lib` - Utility functions and state management (Zustand store)
- `middleware.ts` - Next.js middleware for request handling

### Route Structure

| Route     | Description           | File Path                |
|----------|-----------------------|--------------------------|
| /        | Home page             | /app/page.tsx            |
| /form    | Registration form     | /app/form/page.tsx       |
| /profile | User profiles         | /app/profile/page.tsx    |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
