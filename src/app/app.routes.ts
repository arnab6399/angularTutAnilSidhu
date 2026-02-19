import { Component } from '@angular/core';
import { About } from './about/about';
import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Login } from './login/login';

export const routes: Routes = [
  {path:'about', component: About},
  {path:'contact', component: Contact},
  {path:'login', component: Login}
];
