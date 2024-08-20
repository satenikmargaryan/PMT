import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
