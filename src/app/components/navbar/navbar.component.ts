import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PATHS } from '../../../utils/paths';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  PATHS = PATHS;
  menuOptions = [
    {
      label: 'Inicio',
      path: PATHS.home
    },
    {
      label: 'Conócenos',
      path: PATHS.aboutUs
    },
  ]
}
