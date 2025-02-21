<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chartCanvas;
  
    onMount(() => {
      new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo'],
          datasets: [{
            label: 'Ventas',
            data: [30, 50, 70],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
          }],
        },
      });
    });
  </script>
  
  <canvas bind:this={chartCanvas}></canvas>
  