<script>
  import Navbar from '../Navbar.svelte';
  import Section from '../../lib/components/Section.svelte';

  const generalModules = [
      { icon: '🔍', title: 'Explorar', route: '/admin/explore', disabled: false },
      { icon: '📞', title: 'Contacto', route: '/admin/contact', disabled: false },
      { icon: '🛠️', title: 'Soporte', route: '/admin/support', disabled: false },
      { icon: '📢', title: 'Noticias', route: '/admin/news', disabled: false },
  ];

  const gestionModules = [
      { icon: '📂', title: 'Proyectos', route: '/admin/projects', disabled: false },
      { icon: '📝', title: 'Tareas', route: '/admin/tasks', disabled: false },
      { icon: '💼', title: 'Clientes', route: '/admin/clients', disabled: false },
      { icon: '📅', title: 'Calendario', route: '/admin/calendar', disabled: false },
  ];

  const adminModules = [
      { icon: '👥', title: 'Usuarios', route: '/admin/users', disabled: false },
      { icon: '📊', title: 'Reportes', route: '/admin/reports', disabled: false },
      { icon: '⚙️', title: 'Configuración', route: '/admin/settings', disabled: false },
      { icon: '🔒', title: 'Seguridad', route: '/admin/security', disabled: false },
  ];
</script>

<main>
  <Navbar />
  <h1>Dashboard de Administrador</h1>
  <Section title="General" modules={generalModules} />
  <Section title="Gestión" modules={gestionModules} />
  <Section title="Administración" modules={adminModules} />
</main>