// Importación de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyChfx2fF2uw5Qy9-NiN8GA79cKM5bPFJZw",
    authDomain: "sensor-cava.firebaseapp.com",
    databaseURL: "https://sensor-cava-default-rtdb.firebaseio.com",
    projectId: "sensor-cava",
    storageBucket: "sensor-cava.appspot.com",
    messagingSenderId: "1014666361181",
    appId: "1:1014666361181:web:f92a0477a12ea8429650b4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Referencias a los datos de Firebase para Cava 1
const S1_TMP = ref(db, "CAVA_1/TMP");
const S1_HMD = ref(db, "CAVA_1/HMD");

// Referencias a los datos de Firebase para Cava 2 (si tienes datos de otra cava)
const S2_TMP = ref(db, "CAVA_2/TMP");
const S2_HMD = ref(db, "CAVA_2/HMD");

// Obtener y mostrar los datos de Cava 1 en tiempo real
onValue(S1_TMP, (snapshot) => {
    const data_TMP = snapshot.val();
    document.getElementById("TMP1").innerHTML = `${data_TMP} `;
});

onValue(S1_HMD, (snapshot) => {
    const data_HMD = snapshot.val();
    document.getElementById("HMD1").innerHTML = `${data_HMD} `;
});

// Obtener y mostrar los datos de Cava 2 en tiempo real
onValue(S2_TMP, (snapshot) => {
    const data_TMP = snapshot.val();
    document.getElementById("TMP2").innerHTML = `${data_TMP} `;
});

onValue(S2_HMD, (snapshot) => {
    const data_HMD = snapshot.val();
    document.getElementById("HMD2").innerHTML = `${data_HMD} `;
});
