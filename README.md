# Getting Started with Uifry

This guide will walk you through setting up and running the Uifry application locally. Uifry includes features such as authentication, a dashboard layout, data display, and analytics charts. Follow the steps below to get started.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Git** (for cloning the repository)

---

## Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/Vin-Jex/myaza-frontend-test-vincent.git
   ```

3. Navigate to the project directory:

   ```bash
   cd myaza-frontend-test-vincent
   ```

---

## Step 2: Install Dependencies

1. Install the required dependencies using npm:

   ```bash
   npm install
   ```

---

## Step 3: Set Up Environment Variables

1. Create a `.env` file in the root of your project.
2. Add the following environment variables to the `.env` file:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_AUTH_SECRET=your-secret-key
   ```

   Replace `your-secret-key` with a secure secret key for authentication.

---

## Step 4: Run the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Step 5: Explore the Application

### Key Features

1. **Authentication**:
   - Login and signup forms with input validation.
   - Simulated authentication using cookies.

2. **Dashboard Layout**:
   - Sidebar navigation and top navigation bar.
   - Responsive design for mobile and desktop.

3. **Data Display**:
   - Customizable table component for displaying data.
   - Support for profile images and row actions.

4. **Analytics**:
   - Financial cards to display total sales and expenses.
   - Analytics charts using `ag-charts-react`.

5. **Custom Select Dropdown**:
   - Reusable custom select component for year selection.

---

## Step 6: Customize the Application

### Adding New Pages

1. Create a new folder under `app` (e.g., `app/dashboard/new-page`).
2. Add a `page.tsx` file inside the folder to define the page content.

### Adding New Components

1. Create a new file under `app/components` (e.g., `app/components/ui/NewComponent.tsx`).
2. Define your component and import it into the desired page or component.

### Updating Styles

1. Global styles are defined in `app/globals.css`.
2. TailwindCSS is used for utility classes. Customize the `tailwind.config.js` file for additional configurations.

---

## Step 7: Run Tests

1. Run the following command to execute unit tests:

   ```bash
   npm test
   ```

---

## Step 8: Build for Production

1. Generate a production build:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

---

## Troubleshooting

### Common Issues

1. **Missing Dependencies**:
   - Ensure all dependencies are installed by running `npm install`.

2. **Environment Variables Not Loaded**:
   - Verify that the `.env` file is correctly placed in the root directory and contains the required variables.

3. **Build Errors**:
   - Check for TypeScript or ESLint errors in the terminal and resolve them before building.

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- [AG Charts Documentation](https://www.ag-grid.com/react-charts/)

---

## Support

For any questions or issues, please contact Vincent (VinJex).

---

Thank you for using Uifry! 🚀