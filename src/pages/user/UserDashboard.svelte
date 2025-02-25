<script>
  import Section from '../../lib/components/Section.svelte';

  const generalModules = [
    { icon: '🔍', title: 'Explorar', route: '/user/explore', disabled: false },
    { icon: '📞', title: 'Contacto', route: '/user/contact', disabled: false },
    { icon: '🛠️', title: 'Soporte', route: '/user/support', disabled: false },
    { icon: '📢', title: 'Noticias', route: '/user/news', disabled: false },
  ];

  const gestionModules = [
    { icon: '📂', title: 'Proyectos', route: '/user/projects', disabled: false },
    { icon: '📝', title: 'Tareas', route: '/user/tasks', disabled: false },
    { icon: '💼', title: 'Clientes', route: '/user/clients', disabled: false },
    { icon: '📅', title: 'Calendario', route: '/user/calendar', disabled: false },
  ];
</script>

<main>
  <h1>Dashboard de Usuario</h1>
  <Section title="General" modules={generalModules} />
  <Section title="Gestión" modules={gestionModules} />
</main>