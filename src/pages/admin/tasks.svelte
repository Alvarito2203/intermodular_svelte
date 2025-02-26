<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let tasksChart;
  
    const tasksData = {
      labels: ['Tareas Completadas', 'Tareas Pendientes'],
      datasets: [{
        label: 'Estado de Tareas',
        data: [110, 8],
        backgroundColor: ['#4caf50', '#ff9800'],
        borderColor: ['#1e7e34', '#d39e00'],
        borderWidth: 2
      }]
    };
  
    onMount(() => {
      new Chart(tasksChart, {
        type: 'doughnut',
        data: tasksData,
        options: { responsive: true, maintainAspectRatio: false }
      });
    });
  </script>
  
  <main class="container">
    <h1>✅ Tareas</h1>
    <p class="description">Estado de las tareas asignadas y su progreso.</p>
  
    <div class="content-wrapper">
      <section class="summary">
        <h2>📌 Resumen</h2>
        <ul>
          <li><strong>✅ Completadas:</strong> 110</li>
          <li><strong>📌 Pendientes:</strong> 8</li>
        </ul>
      </section>
      <section class="chart">
        <h2>📊 Estado</h2>
        <div class="chart-container">
          <canvas bind:this={tasksChart}></canvas>
        </div>
      </section>
    </div>
  </main>
  
  <style>
    /* MISMO ESTILO QUE USERS.SVELTE */
  </style>
  