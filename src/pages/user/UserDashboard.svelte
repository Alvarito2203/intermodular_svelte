// src/pages/user/UserDashboard.svelte
<script>
  import { onMount } from 'svelte';
  import Section from '../../lib/components/Section.svelte';
  import Chart from 'chart.js/auto';

  const generalModules = [
    { icon: '🔍', title: 'Explorar', route: '/user/explore', disabled: false },
    { icon: '📞', title: 'Contacto', route: '/user/contact', disabled: false },
    { icon: '🛠️', title: 'Soporte', route: '/user/support', disabled: false },
    { icon: '📢', title: 'Noticias', route: '/user/news', disabled: false },
  ];

  const gestionModules = [
    { icon: '📂', title: 'Proyectos', route: '/user/projects', disabled: false },
    { icon: '📝', title: 'Tareas', route: '/user/tasks', disabled: false },
    { icon: '💼', title: 'Clientes', route: '/user/clients', disabled: false },
    { icon: '📅', title: 'Calendario', route: '/user/calendar', disabled: false },
  ];

  // Datos para los gráficos en cada casilla
  const chartsData = {
    'Explorar': { type: 'bar', data: [{ label: 'Búsquedas', value: 100 }, { label: 'Clics', value: 60 }] },
    'Contacto': { type: 'pie', data: [{ label: 'Emails', value: 40 }, { label: 'Llamadas', value: 30 }] },
    'Soporte': { type: 'line', data: [{ label: 'Tickets', value: 20 }, { label: 'Resueltos', value: 15 }] },
    'Noticias': { type: 'bar', data: [{ label: 'Publicadas', value: 10 }, { label: 'Leídas', value: 7 }] },
    'Proyectos': { type: 'pie', data: [{ label: 'Completos', value: 5 }, { label: 'En progreso', value: 15 }] },
    'Tareas': { type: 'line', data: [{ label: 'Pendientes', value: 20 }, { label: 'Completadas', value: 18 }] },
    'Clientes': { type: 'bar', data: [{ label: 'Nuevos', value: 5 }, { label: 'Activos', value: 20 }] },
    'Calendario': { type: 'pie', data: [{ label: 'Eventos', value: 8 }, { label: 'Reuniones', value: 5 }] },
  };

  let chartCanvases = {};
  let activeCharts = {};

  function toggleChart(title) {
    if (!activeCharts[title]) {
      const ctx = chartCanvases[title]?.getContext('2d');
      if (ctx) {
        activeCharts[title] = new Chart(ctx, {
          type: chartsData[title].type,
          data: {
            labels: chartsData[title].data.map(d => d.label),
            datasets: [{
              label: title,
              data: chartsData[title].data.map(d => d.value),
              backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
            }],
          },
        });
      }
    }
  }
</script>

<main>
  <h1>Dashboard de Usuario</h1>
  <section>
    <h2>General</h2>
    <div class="module-container">
      {#each generalModules as module}
        <div class="module" on:click={() => toggleChart(module.title)}>
          <span>{module.icon}</span>
          <h3>{module.title}</h3>
          <canvas class="chart" bind:this={chartCanvases[module.title]}></canvas>
        </div>
      {/each}
    </div>
  </section>
  
  <section>
    <h2>Gestión</h2>
    <div class="module-container">
      {#each gestionModules as module}
        <div class="module" on:click={() => toggleChart(module.title)}>
          <span>{module.icon}</span>
          <h3>{module.title}</h3>
          <canvas class="chart" bind:this={chartCanvases[module.title]}></canvas>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  .module-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Dos módulos por fila */
    gap: 20px;
    padding: 20px;
  }
  .module {
    background: white;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .chart {
    width: 100% !important;
    max-width: 500px;
    height: 300px !important;
  }
</style>