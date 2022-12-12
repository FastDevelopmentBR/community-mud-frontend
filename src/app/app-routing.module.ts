import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'esqueci-a-senha', component: ForgotPasswordPageComponent },
    { path: 'game', component: GamePageComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
