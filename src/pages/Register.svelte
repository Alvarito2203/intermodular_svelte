<script>
    import { auth, db } from "../firebase";
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { doc, setDoc } from "firebase/firestore";
    import { navigate } from "svelte-routing";

    let email = "";
    let password = "";
    let role = "user";
    let errorMsg = "";
    let successMsg = "";

    async function register() {
    if (!email.includes("@") || password.length < 6) {
        errorMsg = "Correo inválido o contraseña demasiado corta.";
        console.error("Error: Email inválido o contraseña corta.");
        return;
    }

    try {
        console.log("Registrando usuario...");

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Usuario creado en Firebase Auth:", user.uid);

        // Intentar guardar en Firestore
        await setDoc(doc(db, "users", user.uid), { email, role });

        console.log("Usuario guardado en Firestore.");

        successMsg = "Usuario registrado correctamente. Redirigiendo...";
        errorMsg = "";

        setTimeout(() => {
            navigate("/");
        }, 2000);
    } catch (error) {
        console.error("Error en Firebase:", error);
        if (error.code === "auth/email-already-in-use") {
            errorMsg = "Este correo ya está registrado. Intenta iniciar sesión.";
        } else {
            errorMsg = "Error al registrar usuario: " + error.message;
        }
        successMsg = "";
    }
}


</script>

<main>
    <div class="container">
        <h1>Registro</h1>
        <input type="email" bind:value={email} placeholder="Correo electrónico" class="input" />
        <input type="password" bind:value={password} placeholder="Contraseña" class="input" />
        <select bind:value={role} class="input">
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
        </select>
        <button on:click={register} class="button">Registrarse</button>
        {#if successMsg}
            <p class="success">{successMsg}</p>
        {/if}
        {#if errorMsg}
            <p class="error">{errorMsg}</p>
        {/if}
        <p>¿Ya tienes cuenta? <a href="/">Inicia sesión aquí</a></p>
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
    .button:hover {
        background-color: #0056b3;
    }
    .success {
        color: green;
        margin-top: 10px;
    }
    .error {
        color: red;
        margin-top: 10px;
    }
    p {
        margin-top: 10px;
    }
</style>
