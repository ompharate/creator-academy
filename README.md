# 🎓 Creator Academy

<a href="https://imgbb.com/"><img src="https://i.ibb.co/cDDN8T9/logo-only.png" alt="logo-only" border="0" width="200" height="200"></a>

Creator Academy is a platform that enables creators to create and manage courses easily. This open-source project is designed to help creators share their knowledge with the world.

[Watch Demo Video ](https://utfs.io/f/69eb4ca4-8f6d-4b7c-b1b8-fa08f88b32db-f1lhsm.mp4)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- 🛡️ User Authentication with Clerk
- 📝 Course Creation and Management
- 🎨 Theme Selection for Course Pages
- 💳 Payment Integration with Stripe
- 📱 Responsive Design
- ☁️ Image and Video Management with Cloudinary
- 📤 File Uploading with UploadThing

## 🛠️ Tech Stack

- **Frontend:** Next.js, ShadCN, Tailwind CSS
- **Backend:** Next.js, Prisma
- **Database:** MongoDB (via MongoDB Atlas)
- **Validation:** Zod
- **User Authentication:** Clerk
- **Payment Gateway:** Stripe
- **File Uploading:** UploadThing
- **Language:** TypeScript

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### 📦 Prerequisites

Make sure you have the following installed:

- Node.js
- npm (or yarn)
- MongoDB (or a MongoDB Atlas account)
- Stripe account (for payment integration)(currently optional)
- Clerk account (for authentication)
- UploadThing account (for file uploading)

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ompharate/creator-academy.git

   ```

2. Navigate to the project directory:

   ```bash
   cd creator-academy

   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a .env file in the root directory and add the following:
   env

   ```bash
   DATABASE_URL=
   CLERK_ENCRYPTION_KEY=12345678
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=

   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

This will start the application on http://localhost:3000.

## ⚠️ Note



## 🤝 Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

## 📜 License

It is distributed under the MIT License. See LICENSE for more information.

## 📞 Contact

Om Pharate - https://ompharate.tech - ompharate31@gmail.com

Project Link: https://github.com/ompharate/creator-academy.git
