import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPMnSxWGuwLVlNqZ1zeg2_1LSsJRc-mN8",
  authDomain: "banco-de-dados-6f6ef.firebaseapp.com",
  projectId: "banco-de-dados-6f6ef",
  storageBucket: "banco-de-dados-6f6ef.firebasestorage.app",
  messagingSenderId: "912522925486",
  appId: "1:912522925486:web:44c14c9886517ee264643f",
};

const app = initializeApp(firebaseConfig);

export { app };