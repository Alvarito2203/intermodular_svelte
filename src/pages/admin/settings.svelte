<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let settingsChart;
  
    const settingsData = {
      labels: ['Actualizaciones Aplicadas', 'Preferencias Modificadas'],
      datasets: [{
        label: 'Configuraciones',
        data: [3, 9],
        backgroundColor: ['#17a2b8', '#ff9800'],
        borderColor: ['#117a8b', '#d39e00'],
        borderWidth: 2
      }]
    };
  
    onMount(() => {
      new Chart(settingsChart, {
        type: 'bar',
        data: settingsData,
        options: { responsive: true, maintainAspectRatio: false }
      });
    });
  </script>
  
  <main class="container">
    <h1>⚙️ Configuración</h1>
    <p class="description">Consulta los cambios realizados en la configuración del sistema.</p>
  
    <div class="content-wrapper">
      <section class="summary">
        <h2>📌 Resumen</h2>
        <ul>
          <li><strong>🆕 Actualizaciones:</strong> 3</li>
          <li><strong>🔧 Preferencias Cambiadas:</strong> 9</li>
        </ul>
      </section>
      <section class="chart">
        <h2>📊 Actividad</h2>
        <div class="chart-container">
          <canvas bind:this={settingsChart}></canvas>
        </div>
      </section>
    </div>
  </main>
  
  <style>
    /* MISMO ESTILO QUE USERS.SVELTE */
  </style>
  