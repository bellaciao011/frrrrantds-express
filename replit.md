# Brazilian E-commerce Storefront

## Overview
A modern e-commerce storefront targeting Brazilian consumers, built with TanStack Start (React + SSR). Sells products like sandals, bags, and boots. Features PIX payment integration via BuckPay and Supabase as the backend.

## Tech Stack
- **Framework**: TanStack Start (React 19, SSR)
- **Router**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS 4.0 + Shadcn UI / Radix UI
- **State/Data**: TanStack Query
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Payments**: BuckPay (PIX payments)
- **Build Tool**: Vite 7

## Project Structure
```
src/
  components/
    store/     - Business-specific UI (Header, ProductCard, BuyDrawer)
    ui/        - Shadcn UI components
  routes/      - File-based routing (index, checkout, produto.$id)
  integrations/ - Supabase client config
  lib/         - Cart context and utilities
  data/        - Product data
supabase/
  functions/   - Deno Edge Functions (create-pix, buckpay-webhook)
  migrations/  - SQL schema
```

## Key Features
- Product browsing with category filtering and sorting
- Shopping cart with LocalStorage persistence and size selection
- PIX payment checkout flow with QR code generation
- Supabase Edge Functions for secure payment processing

## Development
- Run: `npm run dev` (starts on port 5000)
- Build: `npm run build`
- Preview: `npm run preview`

## Environment Variables
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase anon key
- `VITE_SUPABASE_PROJECT_ID` - Supabase project ID

## Deployment
- Target: Autoscale
- Build: `npm run build`
- Run: `npm run preview`
