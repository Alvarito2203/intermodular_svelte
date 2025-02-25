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
        options: { responsive: true }
      });
  
      new Chart(mostReadTopicsCanvas, {
        type: 'bar',
        data: {
          labels: data.general.news.mostReadTopics,
          datasets: [{
            label: 'Temas Más Leídos',
            data: data.general.news.viewsPerArticle,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
  
      new Chart(viewsPerArticleCanvas, {
        type: 'bar',
        data: {
          labels: data.general.news.mostReadTopics,
          datasets: [{
            label: 'Vistas por Artículo',
            data: data.general.news.viewsPerArticle,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
    });
  </script>
  
  <main>
    <h1>Noticias</h1>
    <canvas bind:this={articlesPublishedCanvas} width="700" height="350"></canvas>
    <canvas bind:this={mostReadTopicsCanvas} width="700" height="350"></canvas>
    <canvas bind:this={viewsPerArticleCanvas} width="700" height="350"></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 700px; margin: 20px auto; display: block; }
  </style>