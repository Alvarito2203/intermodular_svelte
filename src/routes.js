import AdminDashboard from './pages/admin/AdminDashboard.svelte';
import UserDashboard from './pages/user/UserDashboard.svelte';
import GuestDashboard from './pages/guest/GuestDashboard.svelte';
import Login from './pages/Login.svelte';
import Register from './pages/Register.svelte';

export const routes = {
  '/': Login,
  '/register': Register,
  '/admin-dashboard': AdminDashboard,
  '/user-dashboard': UserDashboard,
  '/guest-dashboard': GuestDashboard,
  
};
