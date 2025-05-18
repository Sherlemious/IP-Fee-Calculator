# Instapay Fee Calculator

A modern web application to calculate Instapay transfer fees for Egyptian Pound (EGP) transactions. Instapay is a popular instant payment service in Egypt, and this tool helps users quickly determine the transfer fee, minimum/maximum fees, and total amount for their transactions.

## Features

- **Instant Fee Calculation:** Enter any amount up to 70,000 EGP and instantly see the calculated transfer fee and total amount.
- **Fee Rules:**
  - Fee rate: **0.1%** of the transfer amount
  - Minimum fee: **0.50 EGP**
  - Maximum fee: **20 EGP**
  - Maximum transfer amount: **70,000 EGP**
- **Modern UI:** Responsive, accessible, and visually appealing interface built with React, Tailwind CSS, and shadcn/ui components.
- **No Data Collection:** All calculations are performed locally in your browser. No data is sent or stored.

## Demo

Open the app locally or deploy it to your favorite static hosting provider.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (choose one)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd IP-Fee-Calculator
   ```
2. **Install dependencies:**
   ```powershell
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```powershell
pnpm dev
# or
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:8080](http://localhost:8080).

### Building for Production

```powershell
pnpm build
# or
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` folder.

## Project Structure

- `src/components/` — UI components (calculator, input, info cards, etc.)
- `src/pages/` — Page components (main page, 404, etc.)
- `src/index.css` — Tailwind CSS and custom styles
- `vite.config.ts` — Vite configuration

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Credits

- Made by [Sherlemious](https://github.com/sherlemious)
- Not affiliated with the official Instapay service

## License

This project is open source and available under the [MIT License](LICENSE).
