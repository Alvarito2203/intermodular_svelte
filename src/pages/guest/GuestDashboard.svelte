<script>
    import Section from '../../lib/components/Section.svelte';
  
    const generalModules = [
      { icon: '🔍', title: 'Explorar', route: '/guest/explore', disabled: false },
      { icon: '📞', title: 'Contacto', route: '/guest/contact', disabled: false },
      { icon: '🛠️', title: 'Soporte', route: '/guest/support', disabled: false },
      { icon: '📢', title: 'Noticias', route: '/guest/news', disabled: false },
    ];
  </script>
  
  <main>
    <h1>Dashboard de Invitado</h1>
    <Section title="General" modules={generalModules} />
  </main>
  