"use client"

import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Living word',
//  // description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

import { AuthProvider } from "@/app/lib/userAuth";
import React from 'react';
import { Inter } from 'next/font/google'
// import './ui/globals.css'
import ApiClient from '@/app/lib/HttpRequestManager/api_client';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/app';
import 'firebase/storage'; // Include required services
import { firebaseConfig } from './firebaseConfig';
//import { signInAnonymously } from '../app/dashboard/Incidents/add/page';
//import { getAuth } from 'firebase/auth';
import { app } from './firebase';
const inter = Inter({ subsets: ['latin'] })
// export const metadata = {
//   title: 'Aba Incident Tracking',
//   description: 'Generated by create next app',
// }
//const app = initializeApp(firebaseConfig);
export default function RootLayout({ children }) {
 // firebase.initializeApp(firebaseConfig);
//console.log(app.options);
  ApiClient.initialize('http://172.16.35.39:3001/api'); 
  return (

    <html lang="en">
      <AuthProvider>
      <body className={inter.className}>
        {children}
        </body>
        </AuthProvider>
    </html>

  )
}
