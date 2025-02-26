<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let settingsChart;
  
    const settingsData = {
      labels: ['Actualizaciones Aplicadas', 'Preferencias Cambiadas', 'Tiempo de Actividad del Sistema'],
      datasets: [{
        label: 'Configuraciones y Rendimiento',
        data: [3, 8, 99.7], // Datos iniciales, puedes actualizarlos dinámicamente
        backgroundColor: ['#ff9f40', '#ff6384', '#36a2eb'],
        borderColor: ['#ff9f40', '#ff6384', '#36a2eb'],
        borderWidth: 1
      }]
    };
  
    onMount(() => {
      new Chart(settingsChart, {
        type: 'doughnut',
        data: settingsData,
        options: {
          responsive: true,
        }
      });
    });
  </script>
  
  <main>
    <h1>Configuraciones</h1>
    <canvas bind:this={settingsChart}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 600px; margin: 20px auto; display: block; }
  </style>
  