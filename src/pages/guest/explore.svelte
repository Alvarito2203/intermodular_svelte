<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import data from '../../assets/data.json';
  
    let exploreChartCanvas;
  
    onMount(() => {
      new Chart(exploreChartCanvas, {
        type: 'bar',
        data: {
          labels: data.general.explore.topSearches,
          datasets: [{
            label: 'Volumen de Búsqueda',
            data: data.general.explore.searchVolume,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
    });
  </script>
  
  <main>
    <h1>Explorar</h1>
    <canvas bind:this={exploreChartCanvas} width="800" height="400"></canvas>
  </main>