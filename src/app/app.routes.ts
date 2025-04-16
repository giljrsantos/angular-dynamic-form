import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dynamic-form',
    pathMatch: 'full',
  },
  {
    path: 'dynamic-form',
    loadComponent: () =>
      import(
        './components/dynamic-form/dynamic-form.component'
      ).then((m) => m.DynamicFormComponent),
  },
];
