// BD.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js';
import { getDatabase, ref, push, update, onValue, remove, set, get } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPoCn98zQYHhsQp7oYyYC3p6pejLyCKdk",
  authDomain: "tough-messenger-467220-h2.firebaseapp.com",
  databaseURL: "https://tough-messenger-467220-h2-default-rtdb.firebaseio.com",
  projectId: "tough-messenger-467220-h2",
  storageBucket: "tough-messenger-467220-h2.firebasestorage.app",
  messagingSenderId: "797984737364",
  appId: "1:797984737364:web:7c9cf10ca4169e581f45c1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar
export { database, ref, push, update, onValue, remove, set, get };