// AdminDashboard.svelte
<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import * as d3 from "d3";

    let user = JSON.parse(localStorage.getItem("user")) || { role: "guest" };
    const modules = [
        { name: "Gestión de Usuarios", icon: "👥", path: "/users", roles: ["admin"] },
        { name: "Reportes", icon: "📊", path: "/reports", roles: ["admin"] },
        { name: "Soporte", icon: "🛠", path: "/support", roles: ["admin", "user", "guest"] }
    ];

    let filteredModules = modules.filter(module => module.roles.includes(user.role));

    function goToModule(path) {
        navigate(path);
    }

    onMount(() => {
        d3.selectAll(".module-card")
            .on("mouseover", function () {
                d3.select(this).transition().duration(200).style("transform", "scale(1.1)");
            })
            .on("mouseout", function () {
                d3.select(this).transition().duration(200).style("transform", "scale(1)");
            });
    });
</script>

<main>
    <h1>Dashboard de Administrador</h1>
    <div class="grid">
        {#each filteredModules as module}
            <button class="module-card" on:click={() => goToModule(module.path)}>
                <span class="icon">{module.icon}</span>
                <p>{module.name}</p>
            </button>
        {/each}
    </div>
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        max-width: 800px;
        margin: auto;
    }
    .module-card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        border: none;
        font-size: 16px;
    }
    .icon {
        font-size: 40px;
        display: block;
    }
</style>