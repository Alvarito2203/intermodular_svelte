<script>
    import { auth } from "../firebase";
    import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
    import { navigate } from "svelte-routing";
    import { getDoc, doc, setDoc } from "firebase/firestore";
    import { db } from "../firebase";

    let email = "";
    let password = "";
    let errorMsg = "";

    async function login() {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
                localStorage.setItem("user", JSON.stringify(userDoc.data()));
                navigate("/dashboard");
            } else {
                errorMsg = "No se encontraron datos de usuario.";
            }
        } catch (error) {
            errorMsg = "Error al iniciar sesión. Verifica tus credenciales.";
        }
    }

    async function loginAsGuest() {
        try {
            const userCredential = await signInAnonymously(auth);
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), { role: "guest" });
            navigate("/dashboard");
        } catch (error) {
            errorMsg = "Error al iniciar como invitado.";
        }
    }
</script>

<main>
    <div class="container">
        <h1>Iniciar Sesión</h1>
        <input type="email" bind:value={email} placeholder="Correo electrónico" class="input" />
        <input type="password" bind:value={password} placeholder="Contraseña" class="input" />
        <button on:click={login} class="button">Ingresar</button>
        <button on:click={loginAsGuest} class="button guest">Ingresar como Invitado</button>
        {#if errorMsg}
            <p class="error">{errorMsg}</p>
        {/if}
        <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f8f9fa;
    }
    .container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 300px;
    }
    h1 {
        margin-bottom: 20px;
    }
    .input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .button {
        width: 100%;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 5px;
    }
    .guest {
        background-color: #28a745;
    }
    .button:hover {
        background-color: #0056b3;
    }
    .guest:hover {
        background-color: #218838;
    }
    .error {
        color: red;
        margin-top: 10px;
    }
    p {
        margin-top: 10px;
    }
</style>