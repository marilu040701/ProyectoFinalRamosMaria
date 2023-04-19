import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExpComponent } from './component/exp/exp.component';
import {NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './component/hys/hys.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { InterceptorProvider } from './service/interceptor-service';
import { NewExpComponent } from './component/exp/new-exp.component';
import { EditExpComponent } from './component/exp/edit-exp.component';
import { EstudioComponent } from './component/estudio/estudio.component';
import { NewestudioComponent } from './component/estudio/newestudio.component';
import { EditestudioComponent } from './component/estudio/editestudio.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { NewSkillComponent } from './component/hys/new-skill.component';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExpComponent,
    EstudioComponent,
    HysComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExpComponent,
    EditExpComponent,
    EditExpComponent,
    NewestudioComponent,
    EditestudioComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
