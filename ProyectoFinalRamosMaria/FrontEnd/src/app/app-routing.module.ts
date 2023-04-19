import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewExpComponent } from './component/exp/new-exp.component';
import { EditExpComponent } from './component/exp/edit-exp.component';
import { NewestudioComponent } from './component/estudio/newestudio.component';
import { EditestudioComponent } from './component/estudio/editestudio.component';
import { NewSkillComponent } from './component/hys/new-skill.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExpComponent},
  { path: 'editexp/:id', component: EditExpComponent},
  {path: 'nuevoest', component: NewestudioComponent},
  {path: 'editest/:id', component: EditestudioComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
