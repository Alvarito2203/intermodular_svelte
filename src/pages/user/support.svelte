<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let supportChart;
  
    const supportData = {
      labels: ['Tickets Abiertos', 'Tickets Cerrados'],
      datasets: [{
        label: 'Tickets de Soporte',
        data: [75, 70],
        backgroundColor: ['#ff5733', '#28a745'],
        borderColor: ['#c70039', '#1e7e34'],
        borderWidth: 2
      }]
    };
  
    onMount(() => {
      new Chart(supportChart, {
        type: 'bar',
        data: supportData,
        options: { responsive: true, maintainAspectRatio: false }
      });
    });
  </script>
  
  <main class="container">
    <h1>🛠️ Soporte</h1>
    <p class="description">Estado de los tickets de soporte y su resolución.</p>
  
    <div class="content-wrapper">
      <section class="summary">
        <h2>📌 Resumen</h2>
        <ul>
          <li><strong>🎫 Tickets Abiertos:</strong> 75</li>
          <li><strong>✅ Tickets Cerrados:</strong> 70</li>
        </ul>
      </section>
      <section class="chart">
        <h2>📊 Estadísticas</h2>
        <div class="chart-container">
          <canvas bind:this={supportChart}></canvas>
        </div>
      </section>
    </div>
  </main>
  
  <style>
    /* MISMO ESTILO QUE USERS.SVELTE */
  </style>
  