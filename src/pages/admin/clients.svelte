<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import data from '../../assets/data.json';
  
    let newClientsCanvas;
    let clientSatisfactionCanvas;
    let industriesServedCanvas;
  
    onMount(() => {
      new Chart(newClientsCanvas, {
        type: 'line',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          datasets: [{
            label: 'Nuevos Clientes',
            data: data.gestion.clients.newClients,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
          }]
        },
        options: { responsive: true }
      });
  
      new Chart(clientSatisfactionCanvas, {
        type: 'bar',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          datasets: [{
            label: 'Satisfacción del Cliente',
            data: data.gestion.clients.clientSatisfaction,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
  
      new Chart(industriesServedCanvas, {
        type: 'pie',
        data: {
          labels: ['Tecnología', 'Salud', 'Finanzas', 'Educación', 'Retail'],
          datasets: [{
            label: 'Industrias Servidas',
            data: Object.values(data.gestion.clients.industriesServed),
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
    });
  </script>
  
  <main>
    <h1>Clientes</h1>
    <canvas bind:this={newClientsCanvas} width="800" height="400"></canvas>
    <canvas bind:this={clientSatisfactionCanvas} width="800" height="400"></canvas>
    <canvas bind:this={industriesServedCanvas} width="800" height="400"></canvas>
  </main>