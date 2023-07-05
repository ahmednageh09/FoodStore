import { CanActivateFn } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);
  const snapshot = router.routerState.snapshot;
  if(userService.currentUser.token) return true;
  
  router.navigate(['/login'], {queryParams: {returnUrl: snapshot.url}})
  return false; 
};
