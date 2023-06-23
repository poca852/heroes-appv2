import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export function AuthGuard(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
  const authService: AuthService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication()
    .pipe(
      tap( (isAuthenticated) => {
        !isAuthenticated ? router.navigate(['/auth/login']) : true
      })
    )
}

