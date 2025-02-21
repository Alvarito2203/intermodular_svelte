<script>
  export let icon;
  export let title;
  export let route;
  export let disabled = false;

  function handleClick() {
    if (!disabled && route) window.location.href = route;
  }
</script>

<button class="icon-card {disabled ? 'disabled' : ''}" on:click={handleClick} on:keydown={(e) => e.key === 'Enter' && handleClick()} aria-disabled={disabled} type="button">
  <span class="icon">{@html icon}</span>
  <p class="title">{title}</p>
</button>

<style>
  .icon-card {
    cursor: pointer;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.2s ease;
  }

  .icon-card:hover:not(.disabled) {
    transform: scale(1.05);
  }

  .icon {
    font-size: 32px;
    margin-bottom: 8px;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    color: black; /* Cambia el color del texto a negro */
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .disabled .title {
    color: #333; /* Texto más visible incluso en estado deshabilitado */
  }
</style>
