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
  
    <div class="content-wrapper">
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
        <div class="chart-container">
          <canvas bind:this={securityChart}></canvas>
        </div>
      </section>
    </div>
    <button class="boton-atras" on:click={goBack}>Volver</button>
  </main>
  
  <style>
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
    /* MISMO ESTILO QUE USERS.SVELTE */
  </style>
  