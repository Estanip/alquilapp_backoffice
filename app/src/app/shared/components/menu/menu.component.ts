import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { AuthService } from '@app/app/modules/auth/services';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, MatToolbarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  get routes(): typeof RoutesPaths {
    return RoutesPaths;
  }

  constructor(private readonly _router: Router, private readonly _authService: AuthService) {}

  redirectTo(route: string) {
    this._router.navigate([route]);
  }

  logOut(): void {
    this._authService.logout();
    this._router.navigate([RoutesPaths.AUTH.LOGIN]);
  }
}
