import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environments } from 'src/environments/environment';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  private baseUrl: string = environments.baseUrl;

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ){}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
