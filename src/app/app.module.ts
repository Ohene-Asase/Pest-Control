import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { ToastModule } from 'primeng/toast';
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './components/shared/auth-interceptor'
import { AuthService } from './auth/auth.service'
import { MessageService } from 'primeng/api'
import { AppointmentService } from './pages/appointment/appointment.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
// import { ToastService } from './components/shared/toast.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog-post',
    loadChildren: () =>
      import('./pages/blog-post/blog-post.module').then(
        (m) => m.BlogPostModule
      ),
  },
  { path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'appointment', loadChildren: () => import('./pages/appointment/appointment.module').then(m => m.AppointmentModule) },
  { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [ 
    AuthService,
    AppointmentService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
