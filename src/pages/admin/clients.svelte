<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import data from '../../assets/data.json';

  function goBack() {
    window.history.back();
  }

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
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(clientSatisfactionCanvas, {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
          label: 'Satisfacción del Cliente',
          data: data.gestion.clients.clientSatisfaction,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(industriesServedCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Tecnología', 'Salud', 'Finanzas', 'Educación', 'Retail'],
        datasets: [{
          label: 'Industrias Servidas',
          data: Object.values(data.gestion.clients.industriesServed),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)', 
            'rgba(54, 162, 235, 0.5)', 
            'rgba(255, 206, 86, 0.5)', 
            'rgba(75, 192, 192, 0.5)', 
            'rgba(153, 102, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)', 
            'rgba(75, 192, 192, 1)', 
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  });
</script>

<main class="container">
  <h1>👥 Clientes</h1>
  <p class="description">Consulta el crecimiento de clientes, la satisfacción y las industrias a las que servimos.</p>

  <section class="summary">
    <h2>📌 Resumen</h2>
    <ul>
      <li><strong>📈 Nuevos Clientes Mensuales:</strong> 12</li>
      <li><strong>🌟 Satisfacción Promedio:</strong> 92%</li>
      <li><strong>🏢 Industrias Servidas:</strong> 5</li>
    </ul>
  </section>

  <div class="charts-container">
    <section class="chart">
      <h2>📈 Nuevos Clientes</h2>
      <div class="chart-wrapper">
        <canvas bind:this={newClientsCanvas}></canvas>
      </div>
    </section>

    <section class="chart">
      <h2>🌟 Satisfacción del Cliente</h2>
      <div class="chart-wrapper">
        <canvas bind:this={clientSatisfactionCanvas}></canvas>
      </div>
    </section>

    <section class="chart">
      <h2>🏢 Industrias Servidas</h2>
      <div class="chart-wrapper">
        <canvas bind:this={industriesServedCanvas}></canvas>
      </div>
    </section>
  </div>

  <button class="boton-atras" on:click={goBack}>Volver</button>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 20px auto;
    padding: 30px;
    background: linear-gradient(135deg, #ffffff, #f8f9fa);
    border-radius: 15px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
    color: #555;
    font-size: 1.4em;
    margin-bottom: 10px;
  }

  .description {
    text-align: center;
    font-size: 1.1em;
    color: #666;
    max-width: 700px;
    margin-bottom: 20px;
  }

  .summary {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 85%;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  li {
    margin: 10px 0;
    font-size: 1.1em;
    font-weight: bold;
    color: #222;
  }

  .charts-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    width: 100%;
  }

  .chart {
    background: #fff;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;
    max-width: 400px;
  }

  .chart-wrapper {
    position: relative;
    width: 100%;
    height: 250px; /* Tamaño más pequeño */
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  .boton-atras {
    background: #c8e2fe;
    color: #000000;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
    margin-top: 20px;
  }

  .boton-atras:hover {
    background: #0056b3;
  }
  @media (max-width: 768px) {
    .chart {
      width: 100%;
    }
  }
</style>
