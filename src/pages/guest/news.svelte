<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import data from '../../assets/data.json';

  let articlesPublishedCanvas;
  let mostReadTopicsCanvas;
  let viewsPerArticleCanvas;

  onMount(() => {
    new Chart(articlesPublishedCanvas, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
          label: 'Artículos Publicados',
          data: data.general.news.articlesPublished,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(mostReadTopicsCanvas, {
      type: 'bar',
      data: {
        labels: data.general.news.mostReadTopics,
        datasets: [{
          label: 'Temas Más Leídos',
          data: data.general.news.viewsPerArticle,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(viewsPerArticleCanvas, {
      type: 'bar',
      data: {
        labels: data.general.news.mostReadTopics,
        datasets: [{
          label: 'Vistas por Artículo',
          data: data.general.news.viewsPerArticle,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  });
</script>

<main class="container">
  <h1>📰 Noticias</h1>
  <p class="description">Consulta las publicaciones mensuales, los temas más leídos y las vistas por artículo.</p>

  <section class="summary">
    <h2>📌 Resumen</h2>
    <ul>
      <li><strong>📝 Artículos Publicados Mensualmente:</strong> 10</li>
      <li><strong>🔥 Tema Más Leído:</strong> Tech</li>
      <li><strong>👀 Promedio de Vistas por Artículo:</strong> 220</li>
    </ul>
  </section>

  <div class="charts-container">
    <section class="chart">
      <h2>📅 Publicaciones por Mes</h2>
      <div class="chart-wrapper">
        <canvas bind:this={articlesPublishedCanvas}></canvas>
      </div>
    </section>

    <section class="chart">
      <h2>📊 Temas Más Leídos</h2>
      <div class="chart-wrapper">
        <canvas bind:this={mostReadTopicsCanvas}></canvas>
      </div>
    </section>

    <section class="chart">
      <h2>👀 Vistas por Artículo</h2>
      <div class="chart-wrapper">
        <canvas bind:this={viewsPerArticleCanvas}></canvas>
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
