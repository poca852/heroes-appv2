import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export function PublicGuard(): Observable<boolean> | boolean {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap( isAuthenticated => {
        if( isAuthenticated ){
          router.navigate(['/'])
        }
      }),
      map( isAuthenticated => !isAuthenticated)
    )
}
