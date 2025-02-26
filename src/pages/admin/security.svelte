<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let securityChart;
  
    const securityData = {
      labels: ['Intentos de inicio de sesión', 'Cuentas bloqueadas', 'Incidentes de seguridad', 'Restablecimiento de contraseñas'],
      datasets: [{
        label: 'Eventos de Seguridad (Mensuales)',
        data: [150, 3, 1, 8], // Datos iniciales, puedes cambiarlos dinámicamente
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
        borderColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
        borderWidth: 1
      }]
    };
  
    onMount(() => {
      new Chart(securityChart, {
        type: 'bar',
        data: securityData,
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
  </script>
  
  <main>
    <h1>Seguridad</h1>
    <canvas bind:this={securityChart}></canvas>
  </main>
  
  <style>
    h1 { text-align: center; }
    canvas { max-width: 800px; margin: 20px auto; display: block; }
  </style>
  