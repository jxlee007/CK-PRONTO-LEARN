# Current State of MUDRA - AI Expense Management System

## Existing Features

*   **User Interface:**
    *   Tab-based navigation (Home, Analytics, etc.) ([`RootLayout`](UI/tabs/_layout.tsx))
    *   Custom UI components ([`insightItem`](UI/tabs/analytics.tsx))
    *   Dark/light mode support (inferred from tech stack and general best practices)
    *   Splash screen with branding ([`ConnectedApp`](UI/tabs/index.tsx))
*   **Account Management:**
    *   Multiple account support (savings, current, credit cards, wallets) ([`populateDemoData`](convex/demo.ts))
    *   Account categorization by bank ([`accounts`](convex/schema.ts))
    *   Real-time balance tracking (likely via Convex real-time subscriptions)
*   **Transaction Management:**
    *   Income, expense, and transfer transactions ([`populateDemoData`](convex/demo.ts))
    *   Manual entry of transactions ([`populateDemoData`](convex/demo.ts))
    *   Category assignment ([`populateDemoData`](convex/demo.ts))
    *   Merchant information, location data, notes, and tags ([`transaction-details.tsx`](UI/transaction-details.tsx))
    *   Recurring transaction support (likely planned, some code present) ([`populateDemoData`](convex/demo.ts))
*   **Smart Categorization:**
    *   Default expense and income categories ([`setupApp`](convex/init.ts))
    *   User-defined categories ([`create`](convex/categories.ts))
*   **Analytics & Reporting:**
    *   Financial overview (monthly/yearly income vs expenses)
    *   Expense category breakdown ([`categoryDetails`](UI/tabs/analytics.tsx))
    *   Spending trends over time (likely planned)
    *   Chart visualizations (likely planned)
*   **Demo Mode:**
    *   Demo data population ([`populateDemoData`](convex/demo.ts))
    *   Demo user account ([`setupApp`](convex/init.ts))

## Ongoing Development

*   **App Initialization:**
    *   Automatic initialization on app load ([`ConnectedApp`](UI/tabs/index.tsx))
    *   Manual initialization option ([`handleManualSetup`](UI/tabs/index.tsx))
*   **Demo Data:**
    *   Population of demo accounts, categories, and transactions ([`populateDemoData`](convex/demo.ts))
*   **UI Enhancements:**
    *   Loading state during initialization ([`ConnectedApp`](UI/tabs/index.tsx))
    *   Alerts for success/failure of initialization and demo data population ([`handleManualSetup`](UI/tabs/index.tsx), [`handlePopulateDemo`](UI/tabs/index.tsx))
*   **Convex Integration:**
    *   Testing Convex connection ([`handleTestConnection`](UI/tabs/index.tsx))
    *   Real-time data updates (inferred from Convex usage)

## Known Issues and Refactoring Needs

*   **Error Handling:**
    *   Basic error alerts are in place, but more robust error handling may be needed.
*   **SMS Parsing:**
    *   SMS parsing functionality is mentioned in the [README.md](README.md), but there is no visible implementation in the UI directory.
*   **Budget Management:**
    *   Budget management features are mentioned in the [README.md](README.md), but the UI and logic are not visible in the UI directory.
*   **AI-Powered Insights:**
    *   AI-powered insights are mentioned in the [README.md](README.md), but the implementation is not visible in the UI directory.

## Current Tech Stack

*   **Frontend:**
    *   React Native with Expo ([`index.tsx`](UI/tabs/index.tsx))
    *   TypeScript ([`convexConfig.ts`](convexConfig.ts), [`categories.ts`](convex/categories.ts), etc.)
    *   Expo Router ([`index.tsx`](UI/tabs/index.tsx))
    *   React Native Reanimated (inferred from [README.md](README.md))
*   **Backend:**
    *   Convex real-time database ([`convexConfig.ts`](convexConfig.ts), [`schema.ts`](convex/schema.ts))
    *   Convex functions (queries and mutations) ([`categories.ts`](convex/categories.ts), [`init.ts`](convex/init.ts), [`demo.ts`](convex/demo.ts))

## Database Schema (Convex)

*   **accounts:**
    *   `userId` (string, indexed)
    *   `name` (string)
    *   `type` (string, "savings" | "wallet")
    *   `bankName` (string, indexed)
    *   `balance` (number)
    *   `currency` (string)
    *   `isActive` (boolean)
*   **categories:**
    *   `userId` (string, optional, indexed)
    *   `name` (string)
    *   `icon` (string)
    *   `color` (string)
    *   `type` (string, "income" | "expense")
    *   `isDefault` (boolean, optional)
*   **transactions:**
    *   `userId` (string, indexed)
    *   `accountId` (ID of `accounts`)
    *   `categoryId` (ID of `categories`)
    *   `amount` (number)
    *   `description` (string)
    *   `type` (string, "income" | "expense")
    *   `date` (number, timestamp)
    *   `source` (string, "manual" | "sms")
    *   `isRecurring` (boolean, optional)
    *   `merchantName` (string, optional)
*   **user\_preferences:**
    *   `userId` (string, indexed)
    *   `currency` (string)
    *   `budgetAlerts` (boolean)
    *   `smsPermissionGranted` (boolean)
    *   `notificationsEnabled` (boolean)
    *   `privacySettings` (object)
    *   `onboardingCompleted` (boolean)
    *   `aiAssistantEnabled` (boolean)
*   **budgets:**
    *   `userId` (string)
    *   `categoryId` (ID of `categories`)
    *   `amount` (number)
    *   `period` (string, "weekly" | "monthly" | "yearly")
    *   `startDate` (number)
    *   `endDate` (number)
    *   `spent` (number)