// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {API_firebaseConfig} from '@env'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC10JpT40xEDLi6i_K1B6l1pz_v_PXR63I",
  authDomain: "applaz.firebaseapp.com",
  projectId: "applaz",
  storageBucket: "applaz.appspot.com",
  messagingSenderId: "1049981429747",
  appId: "1:1049981429747:web:9c3453ad1d03191f521486"
};

console.log('====================================');
console.log(firebaseConfig);
console.log('====================================');



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



