<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chartCanvas;
  
    onMount(() => {
      new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
          datasets: [{
            label: 'Ventas',
            data: [150, 200, 170, 220],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top' } }
        }
      });
    });
  </script>
  
  <main>
    <h1>Reportes</h1>
    <canvas bind:this={chartCanvas}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; margin-bottom: 20px; }
    canvas { max-width: 600px; margin: 0 auto; }
  </style>
  