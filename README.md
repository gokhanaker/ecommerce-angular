# 🛒 Ecommerce Angular Application

A modern, responsive ecommerce application built with Angular 15, featuring a clean UI design and enhanced shopping experience.

## ✨ Features

- **🛍️ Product Catalog**: Browse products with category filtering and search functionality
- **🛒 Shopping Cart**: Add/remove items with quantity management
- **💳 Checkout Process**: Complete order form with payment details
- **📧 Order Confirmation**: Order tracking and confirmation system
- **🎨 Modern UI**: Clean, professional design with smooth animations

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Yarn** package manager
- **Angular CLI** (v15 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gokhanaker/ecommerce-angular
   cd ecommerce-angular
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200` to view the application.

## 🛠️ Available Scripts

| Command      | Description                   |
| ------------ | ----------------------------- |
| `yarn start` | Starts the development server |
| `yarn build` | Builds the application        |

## 🎯 Key Technologies

### Frontend Framework

- **[Angular 15](https://angular.dev/)** - Modern web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[RxJS](https://www.learnrxjs.io/)** - Reactive programming library

### UI & Styling

- **[Bootstrap 5](https://getbootstrap.com/)** - CSS framework
- **[Font Awesome](https://fontawesome.com/)** - Icon library

### Backend & Data

- **[Fake Store API](https://fakestoreapi.com/)** - Product data
- **[Firebase Realtime Database](https://firebase.google.com/)** - Order storage
- **[Angular Fire](https://github.com/angular/angularfire)** - Firebase integration

## 🔧 Configuration

### Environment Setup

The application uses environment files for configuration:

- `src/environments/example.environment.ts` - Template file that needs to be configured with Firebase credentials
- `src/environments/environment.ts` - Development configuration (copy from example.environment.ts and add your Firebase config)

### Firebase Configuration

To connect to Firebase as the backend, you need to:

1. **Copy the example environment file**:

   ```bash
   cp src/environments/example.environment.ts src/environments/environment.ts
   ```

2. **Configure Firebase credentials** in `src/environments/environment.ts`:

   ```typescript
   export const environment = {
     production: false,
     firebase: {
       apiKey: 'your-api-key',
       authDomain: 'your-project.firebaseapp.com',
       databaseURL: 'https://your-project.firebaseio.com',
       projectId: 'your-project-id',
       storageBucket: 'your-project.appspot.com',
       messagingSenderId: 'your-sender-id',
       appId: 'your-app-id'
     }
   };
   ```

3. **Get Firebase credentials** from your Firebase Console:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Copy the configuration object

**Note**: The `environment.ts` file is necessary for the application to connect to Firebase Realtime Database for storing order data.
