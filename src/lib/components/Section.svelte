<script>
    import IconCard from './IconCard.svelte';
    export let title;
    export let modules = [];
  </script>
  
  <section>
    <h2>{title}</h2>
    <div class="grid">
      {#each modules as { icon, title, route, disabled }}
        <IconCard {icon} {title} {route} {disabled} />
      {/each}
    </div>
  </section>
  
  <style>
    section {
      margin-bottom: 24px;
    }
    h2 {
      margin-bottom: 12px;
      font-size: 1.5rem;
      color: #2c3e50;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
    }
  </style>
  