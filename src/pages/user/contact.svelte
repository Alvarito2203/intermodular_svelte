<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import data from '../../assets/data.json';
  
    let contactChartCanvas;
  
    onMount(() => {
      new Chart(contactChartCanvas, {
        type: 'line',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          datasets: [{
            label: 'Mensajes Mensuales',
            data: data.general.contact.monthlyMessages,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
          }]
        },
        options: { responsive: true }
      });
    });
  </script>
  
  <main>
    <h1>Contacto</h1>
    <canvas bind:this={contactChartCanvas} width="1000" height="500"></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 800px; margin: 20px auto; display: block; }
  </style>