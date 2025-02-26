<script>
    import { auth } from "../firebase";
    import { navigate } from "svelte-routing";
    import { userRole } from "../lib/stores";
    import { onMount } from "svelte";

    let user = null;

    onMount(() => {
        user = JSON.parse(localStorage.getItem("user"));
    });

    function logout() {
        auth.signOut().then(() => {
            localStorage.removeItem("user");
            userRole.set(null);
            window.location.href = "http://localhost:5173/"; // Redirigir a la página inicial
        }).catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
    }
</script>

<nav>
    <div class="nav-container">
        {#if user}
            <span class="user-info">Usuario: {user.email}</span>
        {/if}
        <button on:click={logout} class="nav-button">Cerrar Sesión</button>
    </div>
</nav>

<style>
    nav {
        background-color: #c8e2fe;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .user-info {
        margin-right: auto;
        padding-right: 20px;
        font-size: 16px;
        color: rgb(0, 0, 0);
    }
    .nav-button {
        background-color: transparent;
        color: rgb(0, 0, 0);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
    }
    .nav-button:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
    }
</style>