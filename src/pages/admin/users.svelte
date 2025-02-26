<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let usersChart;
  
    const usersData = {
      labels: ['Usuarios Totales', 'Usuarios Activos', 'Nuevos Usuarios Mensuales'],
      datasets: [{
        label: 'Estadísticas de Usuarios',
        data: [150, 120, 19], // Datos basados en el JSON
        backgroundColor: ['#36a2eb', '#4caf50', '#ff9800'],
        borderColor: ['#36a2eb', '#4caf50', '#ff9800'],
        borderWidth: 1
      }]
    };
  
    onMount(() => {
      new Chart(usersChart, {
        type: 'bar',
        data: usersData,
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
  </script>
  
  <main>
    <h1>Usuarios</h1>
    <canvas bind:this={usersChart}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 800px; margin: 20px auto; display: block; }
  </style>