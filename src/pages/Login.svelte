<script>
  import { auth, db } from "../firebase";
  import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  import { navigate } from "svelte-routing";
  import { userRole } from "../lib/stores";

  let email = "";
  let password = "";
  let errorMsg = "";
  let successMsg = "";

  async function login() {
    if (!email.includes("@") || password.length < 6) {
      errorMsg = "Correo o contraseña incorrectos.";
      successMsg = "";
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem("user", JSON.stringify(userData));
        userRole.set(userData.role); // Guardar el rol en el store global

        successMsg = "Inicio de sesión exitoso. Redirigiendo...";
        errorMsg = "";

        setTimeout(() => {
          if (userData.role === "admin") {
            navigate("/admin-dashboard");
          } else if (userData.role === "user") {
            navigate("/user-dashboard");
          } else if (userData.role === "guest") {
            navigate("/guest-dashboard");
          } else {
            navigate("/dashboard");
          }
        }, 1500);

      } else {
        errorMsg = "No se encontró información del usuario.";
        successMsg = "";
      }

    } catch (error) {
      errorMsg = `Error al iniciar sesión: ${error.message}`;
      successMsg = "";
    }
  }

  async function loginAsGuest() {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      // Guardar rol de invitado en Firestore y localStorage
      await setDoc(doc(db, "users", user.uid), { role: "guest" }, { merge: true });
      localStorage.setItem("user", JSON.stringify({ role: "guest" }));
      userRole.set("guest");

      successMsg = "Sesión iniciada como invitado. Redirigiendo...";
      errorMsg = "";

      setTimeout(() => navigate("/guest-dashboard"), 1500);

    } catch (error) {
      errorMsg = "Error al iniciar como invitado.";
      successMsg = "";
    }
  }
</script>

<main>
  <div class="container">
    <h1>Iniciar Sesión</h1>
    <div class="input-container">
      <input type="email" bind:value={email} placeholder="Correo electrónico" class="input" />
    </div>
    <div class="input-container">
      <input type="password" bind:value={password} placeholder="Contraseña" class="input" />
    </div>
    <button on:click={login} class="button">Ingresar</button>
    <button on:click={loginAsGuest} class="button guest">Ingresar como Invitado</button>

    {#if successMsg}
      <p class="success">{successMsg}</p>
    {/if}
    {#if errorMsg}
      <p class="error">{errorMsg}</p>
    {/if}

    <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
  </div>
</main>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden; /* Evita el scroll */
    font-family: Arial, sans-serif;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f8f9fa;
    margin: 0;
  }
  .container {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 500px;
  }
  h1 { margin-bottom: 20px; font-size: 24px; }
  .input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .guest { background-color: #28a745; }
  .button:hover { opacity: 0.9; }
  .success { color: green; margin-top: 10px; font-weight: bold; }
  .error { color: red; margin-top: 10px; font-weight: bold; }
  p { margin-top: 10px; font-size: 14px; }
  a { color: #007bff; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>