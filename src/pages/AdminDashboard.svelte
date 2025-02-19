<script>
    import { navigate } from "svelte-routing";
  
    const modules = [
      {
        section: "Ventas",
        items: [
          { name: "Clientes", icon: "👥", path: "/clientes" },
          { name: "Cotizaciones", icon: "📝", path: "/cotizaciones" },
          { name: "Pedidos", icon: "📦", path: "/pedidos" },
        ],
      },
      {
        section: "Compras",
        items: [
          { name: "Proveedores", icon: "🏬", path: "/proveedores" },
          { name: "Órdenes de Compra", icon: "🛒", path: "/ordenes-compra" },
        ],
      },
      {
        section: "Contabilidad",
        items: [
          { name: "Facturación", icon: "💵", path: "/facturacion" },
          { name: "Informes", icon: "📊", path: "/informes" },
        ],
      },
      {
        section: "Recursos Humanos",
        items: [
          { name: "Empleados", icon: "👔", path: "/empleados" },
          { name: "Ausencias", icon: "🏖️", path: "/ausencias" },
        ],
      },
      {
        section: "Proyectos",
        items: [
          { name: "Proyectos", icon: "📁", path: "/proyectos" },
          { name: "Tareas", icon: "🗂️", path: "/tareas" },
        ],
      },
      {
        section: "Soporte",
        items: [
          { name: "Tickets", icon: "🎟️", path: "/tickets" },
          { name: "Contacto", icon: "✉️", path: "/contacto" },
        ],
      },
    ];
  
    function goToModule(path) {
      navigate(path);
    }
  </script>
  
  <main>
    <h1>Dashboard de Administrador</h1>
    {#each modules as module}
      <section>
        <h2>{module.section}</h2>
        <div class="grid">
          {#each module.items as item}
            <button class="module-card" on:click={() => goToModule(item.path)} on:keydown={(e) => e.key === 'Enter' && goToModule(item.path)} aria-label={item.name}>
              <span class="icon">{item.icon}</span>
              <p>{item.name}</p>
            </button>
          {/each}
        </div>
      </section>
    {/each}
  </main>
  
  <style>
    main {
      padding: 20px;
      text-align: center;
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  
    section {
      margin-top: 2rem;
    }
  
    h2 {
      text-align: left;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }
  
    .module-card {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
  
    .module-card:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  
    .icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 1rem;
      font-weight: 500;
    }
  </style>