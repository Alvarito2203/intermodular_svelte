<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let usersChart;
  
    const usersData = {
      labels: ['Usuarios Totales', 'Usuarios Activos', 'Nuevos Usuarios Mensuales'],
      datasets: [{
        label: 'Estadísticas de Usuarios',
        data: [150, 120, 19], // Datos basados en el JSON
        backgroundColor: ['#36a2eb', '#4caf50', '#ff9800'],
        borderColor: ['#36a2eb', '#4caf50', '#ff9800'],
        borderWidth: 1
      }]
    };
  
    onMount(() => {
      new Chart(usersChart, {
        type: 'bar',
        data: usersData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
  </script>
  
  <main>
    <h1>📊 Usuarios</h1>
    <p>Consulta la información clave sobre los usuarios registrados en la plataforma. Aquí puedes ver la cantidad total de usuarios, cuántos están activos y la tasa de crecimiento mensual.</p>
    <section class="user-summary">
      <h2>📌 Resumen de Usuarios</h2>
      <ul>
        <li><strong>👥 Usuarios Totales:</strong> 150</li>
        <li><strong>🟢 Usuarios Activos:</strong> 120</li>
        <li><strong>📈 Nuevos Usuarios Mensuales:</strong> 19</li>
      </ul>
    </section>
    <section class="user-chart">
      <h2>📊 Gráfica de Usuarios</h2>
      <p>Esta gráfica representa visualmente la proporción de usuarios totales, activos y nuevos en la plataforma.</p>
      <div class="chart-container">
        <canvas bind:this={usersChart}></canvas>
      </div>
    </section>
  </main>
  
  <style>
    h1, h2 { text-align: center; color: #333; }
    p { text-align: center; max-width: 800px; margin: 0 auto 20px; font-size: 1.1em; color: #555; }
    ul { list-style: none; padding: 0; text-align: center; }
    li { margin: 10px 0; font-size: 1.2em; font-weight: bold; color: #222; }
    .user-summary { background: #f4f4f4; padding: 20px; border-radius: 10px; margin: 20px auto; max-width: 500px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
    .user-chart { max-width: 900px; margin: 0 auto; }
    .chart-container { position: relative; height: 400px; width: 100%; }
    canvas { width: 100% !important; height: 100% !important; }
  </style>
  