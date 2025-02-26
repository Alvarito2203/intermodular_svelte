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
      options: { responsive: true }
    });

    new Chart(meetingDurationsCanvas, {
      type: 'bar',
      data: {
        labels: ['30 min', '45 min', '60 min', '90 min', '120 min'],
        datasets: [{
          label: 'Duración de Reuniones',
          data: data.gestion.calendar.meetingDurationsMinutes,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: { responsive: true }
    });

    new Chart(eventTypesCanvas, {
      type: 'pie',
      data: {
        labels: ['Reunión', 'Webinar', 'Capacitación'],
        datasets: [{
          label: 'Tipos de Eventos',
          data: Object.values(data.gestion.calendar.eventTypes),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      },
      options: { responsive: true }
    });
  });
</script>

<main>
  <h1>Calendario</h1>
  <canvas bind:this={eventsScheduledCanvas} width="450" height="225"></canvas>
  <canvas bind:this={meetingDurationsCanvas} width="450" height="225"></canvas>
  <canvas bind:this={eventTypesCanvas} width="450" height="225"></canvas>
</main>