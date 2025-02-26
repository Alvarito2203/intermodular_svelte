<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let tasksChart;
  
    const tasksData = {
      labels: ['Tareas Completadas', 'Tareas Pendientes', 'Alta Prioridad', 'Media Prioridad', 'Baja Prioridad'],
      datasets: [{
        label: 'Estado de Tareas',
        data: [110, 8, 25, 40, 15], // Datos basados en el JSON
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3', '#9c27b0'],
        borderColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3', '#9c27b0'],
        borderWidth: 1
      }]
    };
  
    onMount(() => {
      new Chart(tasksChart, {
        type: 'pie',
        data: tasksData,
        options: {
          responsive: true,
        }
      });
    });
  </script>
  
  <main>
    <h1>Gestión de Tareas</h1>
    <canvas bind:this={tasksChart}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 600px; margin: 20px auto; display: block; }
  </style>