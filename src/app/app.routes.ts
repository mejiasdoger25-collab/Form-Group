import { Routes } from '@angular/router';
import { BlogPost } from './components/blog-post/blog-post';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'form', component: BlogPost}, 
    {path: '', component: BlogPost}, 
    {path: '**', component: NotFoundPage}
];
