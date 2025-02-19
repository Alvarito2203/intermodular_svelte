<script>
    import { navigate } from "svelte-routing";

    const sections = [
        {
            title: "Explorar",
            modules: [
                { name: "Catálogo", icon: "🔎", path: "/guest/catalog" },
                { name: "Contacto", icon: "📨", path: "/guest/contact" },
                { name: "Soporte", icon: "🛠️", path: "/guest/support" }
            ]
        },
        {
            title: "Acceso Limitado",
            modules: [
                { name: "Proyectos (Restringido)", icon: "📁", path: "/register" },
                { name: "Tareas (Restringido)", icon: "📝", path: "/register" },
                { name: "Mensajes (Restringido)", icon: "💬", path: "/register" }
            ]
        }
    ];

    function goToModule(path) {
        navigate(path);
    }
</script>

<main>
    <h1>Dashboard de Invitado</h1>
    {#each sections as section}
        <h2>{section.title}</h2>
        <div class="grid">
            {#each section.modules as module}
                <button type="button" class="module-card" on:click={() => goToModule(module.path)} aria-label="{module.name}">
                    <span class="icon">{module.icon}</span>
                    <p>{module.name}</p>
                </button>
            {/each}
        </div>
    {/each}
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }
    h2 {
        margin-top: 30px;
        color: #555;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
        margin-top: 15px;
    }
    .module-card {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    .module-card:hover {
        transform: scale(1.05);
    }
    .icon {
        font-size: 36px;
        margin-bottom: 8px;
    }
    p {
        margin: 0;
        font-weight: 600;
    }
</style>
