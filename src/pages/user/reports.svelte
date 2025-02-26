<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import data from '../../assets/data.json';
  
    let chartCanvas;
  
    onMount(() => {
      new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          datasets: [{
            label: 'Reportes Mensuales',
            data: data.administracion.reports.monthlyReports,
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6c757d', '#fd7e14', '#6610f2', '#20c997', '#e83e8c', '#adb5bd', '#f8f9fa'],
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
    <canvas bind:this={chartCanvas} width="800" height="400"></canvas>
  </main>
  
  <style>
    h1 { text-align: center; margin-bottom: 20px; }
    canvas { max-width: 800px; margin: 0 auto; }
  </style>