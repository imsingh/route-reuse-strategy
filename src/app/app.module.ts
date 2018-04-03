import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomStrategy } from './reuse-strategy';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';

enableProdMode();

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { cache: true } },
  { path: 'next', component: NextComponent, data: { cache: true }  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
