<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chartCanvas;
  
    onMount(() => {
      new Chart(chartCanvas, {
        type: 'line',
        data: {
          labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
          datasets: [{
            label: 'Progreso de Proyectos (%)',
            data: [40, 55, 70, 85],
            borderColor: '#007bff',
            fill: false,
          }]
        },
        options: { responsive: true }
      });
    });
  </script>
  
  <main>
    <h1>Proyectos</h1>
    <canvas bind:this={chartCanvas}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 600px; margin: 20px auto; display: block; }
  </style>
  