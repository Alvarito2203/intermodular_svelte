<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let supportChart;
  
    const supportData = {
      labels: ['Tickets Abiertos', 'Tickets Cerrados', 'Prioridad Alta', 'Prioridad Media', 'Prioridad Baja'],
      datasets: [{
        label: 'Estadísticas de Soporte',
        data: [75, 70, 35, 50, 20], // Datos iniciales basados en el JSON
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
        borderColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
        borderWidth: 1
      }]
    };
  
    onMount(() => {
      new Chart(supportChart, {
        type: 'bar',
        data: supportData,
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
    <h1>Soporte</h1>
    <canvas bind:this={supportChart}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 800px; margin: 20px auto; display: block; }
  </style>
  