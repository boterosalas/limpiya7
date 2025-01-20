import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CONST } from '../../../utils/const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsComponent {
  CONST = CONST;

  slides = [
    {
      description:
        'Buscamos en nuestro personal el mejor talento humano , que amen lo que hacen y que sientan esta compañía como propia.',
      name: 'Manolo Ramírez Vargas',
      role: 'CEO',
    },
    {
      description:
        'Buscamos la excelencia en el trabajo con esfuerzo, dedicación e ingenio.',
      name: 'Ismael Salas Alzate',
      role: 'CEO',
    },
    {
      description:
        'Hacemos que nuestros clientes se queden con nuestra mejor impresión.',
      name: 'Elizabeth Vargas F',
      role: 'Representante Legal',
    },
  ];
}
