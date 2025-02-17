<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import * as d3 from "d3";

    let user = JSON.parse(localStorage.getItem("user")) || { role: "guest" };
    
    // Verificar el usuario en consola
    console.log("Usuario actual:", user);

    const modules = [
        { name: "Ventas", icon: "📈", path: "/ventas", roles: ["admin", "user"] },
        { name: "Facturación", icon: "💰", path: "/facturacion", roles: ["admin", "user"] },
        { name: "Inventario", icon: "📦", path: "/inventario", roles: ["admin", "user"] },
        { name: "RRHH", icon: "👥", path: "/rrhh", roles: ["admin"] },
        { name: "Soporte", icon: "🛠", path: "/soporte", roles: ["admin", "user", "guest"] }
    ];

    let filteredModules = modules.filter(module => module.roles.includes(user.role));

    console.log("Módulos visibles:", filteredModules);

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
    <h1>Dashboard</h1>

    {#if filteredModules.length > 0}
        <div class="grid">
            {#each filteredModules as module}
                <button class="module-card" on:click={() => goToModule(module.path)}>
                    <span class="icon">{module.icon}</span>
                    <p>{module.name}</p>
                </button>
            {/each}
        </div>
    {:else}
        <p>No tienes módulos disponibles.</p>
    {/if}
</main>
