<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let securityChart;

  const securityData = {
    labels: ['Intentos de Inicio de Sesión', 'Cuentas Bloqueadas', 'Incidentes de Seguridad'],
    datasets: [{
      label: 'Seguridad',
      data: [160, 4, 2],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107'],
      borderColor: ['#0056b3', '#a71d2a', '#d39e00'],
      borderWidth: 2
    }]
  };

  onMount(() => {
    new Chart(securityChart, {
      type: 'pie',
      data: securityData,
      options: { responsive: true, maintainAspectRatio: false }
    });
  });

  function goBack() {
    window.history.back();
  }
</script>

<main class="container">
  <h1>🔒 Seguridad</h1>
  <p class="description">Monitorea los intentos de inicio de sesión y problemas de seguridad.</p>

  <section class="summary">
    <h2>📌 Resumen</h2>
    <ul>
      <li><strong>🔑 Intentos:</strong> 160</li>
      <li><strong>🚫 Cuentas Bloqueadas:</strong> 4</li>
      <li><strong>⚠️ Incidentes:</strong> 2</li>
    </ul>
  </section>

  <section class="chart">
    <h2>📊 Estadísticas</h2>
    <div class="chart-wrapper">
      <canvas bind:this={securityChart}></canvas>
    </div>
  </section>

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
    height: 250px;
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