<script>
    import { onMount } from "svelte";

    let message = "Cargando...";
    let user = JSON.parse(localStorage.getItem("user")) || {};

    onMount(() => {
        message = `Bienvenido ${user.email}, tu rol es ${user.role}`;
    });
</script>

<main>
    <h1>{message}</h1>
</main>
