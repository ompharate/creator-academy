# 🎓 Creator Academy

<a href="https://imgbb.com/"><img src="https://i.ibb.co/cDDN8T9/logo-only.png" alt="logo-only" border="0"></a> <br>
Creator Academy is a platform that enables creators to create and manage courses easily. This open-source project is designed to help creators share their knowledge with the world.

## 📋 Table of Contents

- [Features](#features)
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
- 💳 Payment Integration with Razorpay
- 📱 Responsive Design
- 📤 File Uploading with UploadThing


## 🛠️ Tech Stack

- **Frontend:** Next.js, ShadCN, Tailwind CSS
- **Backend:** Next.js, Zod,Prisma
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
- stripe account (for payment integration)
- Clerk account (for authentication)

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ompharate/creator-academy.git
   ```
Navigate to the project directory:

bash
Copy code
cd creator-academy
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

env
Copy code
DATABASE_URL="your_mongodb_connection_string"
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
CLERK_FRONTEND_API="your_clerk_frontend_api"
CLERK_API_KEY="your_clerk_api_key"
CLOUDINARY_URL="your_cloudinary_url"
UPLOADTHING_API_KEY="your_uploadthing_api_key"
Start the development server:

bash
Copy code
npm run dev
This will start the application on http://localhost:3000.

⚠️ Note
This project is not deployed yet. The project will be deployed when it is sufficiently complete.

🤝 Contributing

Memory updated
Here's the updated README file with installation steps, Cloudinary, UploadThing, and a note about deployment:

markdown
Copy code
# 🎓 Creator Academy

<a href="https://imgbb.com/"><img src="https://i.ibb.co/cDDN8T9/logo-only.png" alt="logo-only" border="0"></a>

Creator Academy is a platform that enables creators to create and manage courses easily. This open-source project is designed to help creators share their knowledge with the world.

## 📋 Table of Contents

- [Features](#features)
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
- 💳 Payment Integration with Razorpay
- 📱 Responsive Design
- ☁️ Image and Video Management with Cloudinary
- 📤 File Uploading with UploadThing

## 🛠️ Tech Stack

- **Frontend:** Next.js, ShadCN, Tailwind CSS
- **Backend:** Node.js, Express.js, Prisma
- **Database:** MongoDB (via MongoDB Atlas)
- **Validation:** Zod
- **User Authentication:** Clerk
- **Payment Gateway:** Razorpay
- **File Uploading:** UploadThing
- **Media Management:** Cloudinary
- **Language:** TypeScript

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### 📦 Prerequisites

Make sure you have the following installed:

- Node.js
- npm (or yarn)
- MongoDB (or a MongoDB Atlas account)
- Razorpay account (for payment integration)
- Clerk account (for authentication)
- Cloudinary account (for media management)
- UploadThing account (for file uploading)

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/creator-academy.git

2. Navigate to the project directory:
    ```bash
    cd creator-academy

3.Install the dependencies:
    ```bash
    npm install
4.Set up environment variables:
    Create a .env file in the root directory and add the following:
    env
    ```bash
    DATABASE_URL="your_mongodb_connection_string"
    RAZORPAY_KEY_ID="your_razorpay_key_id"
    RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
    CLERK_FRONTEND_API="your_clerk_frontend_api"
    CLERK_API_KEY="your_clerk_api_key"
    CLOUDINARY_URL="your_cloudinary_url"
    UPLOADTHING_API_KEY="your_uploadthing_api_key"

 5.Start the development server:
    bash```
    npm run dev

This will start the application on http://localhost:3000.

 ## ⚠️ Note
This project is not deployed yet. The project will be deployed when it is sufficiently complete.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
## 📜 License
Distributed under the MIT License. See LICENSE for more information.

## 📞 Contact
Om Pharate - ompharate.tech - ompharate31@gmail.com

Project Link: https://github.com/ompharate/creator-academy.git
**Note: This project is not deployed yet. The project will be developed when it is sufficiently complete.**
