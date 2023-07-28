import firebase from 'firebase/app';
import 'firebase/auth';

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

// Hàm đăng nhập người dùng
export async function loginUser(email, password) {
  const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
  return userCredential.user;
}

// Hàm đăng ký người dùng
export async function registerUser(email, password) {
  const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
  return userCredential.user;
}
