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
          backgroundColor: [
            '#007bff', '#28a745', '#ffc107', '#dc3545', 
            '#17a2b8', '#6c757d', '#fd7e14', '#6610f2', 
            '#20c997', '#e83e8c', '#adb5bd', '#f8f9fa'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } }
      }
    });
  });
</script>

<main class="container">
  <h1>📑 Reportes</h1>
  <p class="description">Consulta la cantidad de reportes generados por mes y su distribución.</p>

  <section class="summary">
    <h2>📌 Resumen</h2>
    <ul>
      <li><strong>📅 Reportes Promedio Mensual:</strong> 7</li>
      <li><strong>📊 Tipo de Reporte Más Generado:</strong> Financieros</li>
      <li><strong>⏳ Tiempo Promedio de Aprobación:</strong> 2 días</li>
    </ul>
  </section>

  <section class="chart">
    <h2>📊 Reportes Mensuales</h2>
    <div class="chart-wrapper">
      <canvas bind:this={chartCanvas}></canvas>
    </div>
  </section>
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

  .chart {
    background: #fff;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;
    max-width: 500px;
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

  @media (max-width: 768px) {
    .chart {
      width: 100%;
    }
  }
</style>
