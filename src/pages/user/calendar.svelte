<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import data from '../../assets/data.json';

  let eventsScheduledCanvas;
  let meetingDurationsCanvas;
  let eventTypesCanvas;

  onMount(() => {
    new Chart(eventsScheduledCanvas, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
          label: 'Eventos Programados',
          data: data.gestion.calendar.eventsScheduled,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(meetingDurationsCanvas, {
      type: 'bar',
      data: {
        labels: ['30 min', '45 min', '60 min', '90 min', '120 min'],
        datasets: [{
          label: 'Duración de Reuniones',
          data: data.gestion.calendar.meetingDurationsMinutes,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(eventTypesCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Reunión', 'Webinar', 'Capacitación'],
        datasets: [{
          label: 'Tipos de Eventos',
          data: Object.values(data.gestion.calendar.eventTypes),
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  });
</script>

<main class="container">
  <h1>📅 Calendario</h1>
  <p class="description">Consulta los eventos programados, la duración de reuniones y los tipos de eventos realizados.</p>

  <section class="summary">
    <h2>📌 Resumen</h2>
    <ul>
      <li><strong>📆 Eventos Programados:</strong> 12</li>
      <li><strong>⏳ Reuniones Promedio:</strong> 60 min</li>
      <li><strong>🎓 Tipos de Eventos:</strong> 3</li>
    </ul>
  </section>

  <div class="charts-container">
    <section class="chart">
      <h2>📈 Eventos Programados</h2>
      <div class="chart-wrapper">
        <canvas bind:this={eventsScheduledCanvas}></canvas>
      </div>
    </section>

    <section class="chart">
      <h2>📊 Duración de Reuniones</h2>
      <div class="chart-wrapper">
        <canvas bind:this={meetingDurationsCanvas}></canvas>
      </div>
    </section>

    <section class="chart">
      <h2>🎭 Tipos de Eventos</h2>
      <div class="chart-wrapper">
        <canvas bind:this={eventTypesCanvas}></canvas>
      </div>
    </section>
  </div>
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

  @media (max-width: 768px) {
    .chart {
      width: 100%;
    }
  }
</style>
