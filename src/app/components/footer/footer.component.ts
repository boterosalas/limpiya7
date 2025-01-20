import { Component } from '@angular/core';
import { CONST } from '../../../utils/const';
import { RouterModule } from '@angular/router';
import { PATHS } from '../../../utils/paths';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  CONST = CONST;
  PATHS = PATHS;
}
