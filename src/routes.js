import AdminDashboard from './pages/admin/AdminDashboard.svelte';
import UserDashboard from './pages/user/UserDashboard.svelte';
import GuestDashboard from './pages/guest/GuestDashboard.svelte';
import Login from './pages/Login.svelte';
import Register from './pages/Register.svelte';
import Explore from './pages/admin/explore.svelte';
import Contact from './pages/admin/contact.svelte';
import Support from './pages/admin/support.svelte';
import News from './pages/admin/news.svelte';
import Projects from './pages/admin/projects.svelte';
import Tasks from './pages/admin/tasks.svelte';
import Clients from './pages/admin/clients.svelte';
import Calendar from './pages/admin/calendar.svelte';
import Users from './pages/admin/users.svelte';
import Reports from './pages/admin/reports.svelte';
import Settings from './pages/admin/settings.svelte';
import Security from './pages/admin/security.svelte';
import UserExplore from './pages/user/explore.svelte';
import UserContact from './pages/user/contact.svelte';
import UserProjects from './pages/user/projects.svelte';
import UserTasks from './pages/user/tasks.svelte';
import UserCalendar from './pages/user/calendar.svelte';
import UserReports from './pages/user/reports.svelte';
import UserClients from './pages/user/clients.svelte';  // ✅ Nuev
import UserSupport from './pages/user/support.svelte';  // ✅ Nuev

// Importaciones para Guest
import GuestExplore from './pages/guest/explore.svelte';
import GuestContact from './pages/guest/contact.svelte';
import GuestSupport from './pages/guest/support.svelte';
import GuestNews from './pages/guest/news.svelte';

export const routes = {
  '/': Login,
  '/register': Register,
  '/admin-dashboard': AdminDashboard,
  '/user-dashboard': UserDashboard,
  '/guest-dashboard': GuestDashboard,
  '/admin/explore': Explore,
  '/admin/contact': Contact,
  '/admin/support': Support,
  '/admin/news': News,
  '/admin/projects': Projects,
  '/admin/tasks': Tasks,
  '/admin/clients': Clients,
  '/admin/calendar': Calendar,
  '/admin/users': Users,
  '/admin/reports': Reports,
  '/admin/settings': Settings,
  '/admin/security': Security,
  '/user/explore': UserExplore,
  '/user/contact': UserContact,
  '/user/projects': UserProjects,
  '/user/tasks': UserTasks,
  '/user/calendar': UserCalendar,
  '/user/reports': UserReports,
  '/user/clients': UserClients,      // ✅ Añadido
  '/user/support': UserSupport,      // ✅ Añadido


  // Guest Routes
  '/guest/explore': GuestExplore,
  '/guest/contact': GuestContact,
  '/guest/support': GuestSupport,
  '/guest/news': GuestNews,
  
};
