import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'header',
        loadComponent: () => import('./header/header.component'),
        children:[
            {
                path: 'info-personal',
                title: 'Informacion Personal',
                loadComponent: () => import("./header/Pages/info-personal/info-personal.component"),
            },
            {
                path: 'proyectos',
                title: 'Proyectos',
                loadComponent: () => import("./header/Pages/proyectos/proyectos.component"),
            },
            {
                path: 'contacto',
                title: ' Contacto',
                loadComponent:() => import("./header/Pages/contacto/contacto.component") ,
            },
            {
                path:'', 
                redirectTo: 'info-personal',
                pathMatch:'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/header',
        pathMatch: 'full'
    }
];
