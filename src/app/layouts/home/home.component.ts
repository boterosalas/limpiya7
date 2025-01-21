import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CONST } from '../../../utils/const';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

  services = [
    {
      image: './assets/img/asesoria-contable-tributaria.jpg',
      title: 'Asesorías Contables y tributarias.',
      description: 'Servicios de asesorías contables, orientados a optimizar la gestión financiera y administrativa de tu empresa. Afiliaciones a la seguridad social, nómina, entre otros.',
      url: CONST.waLinkAsesoriaContableTributaria
    },
    {
      image: './assets/img/aseo-limpieza.jpg',
      title: 'Servicios de Limpieza',
      description: 'Nuestro equipo esta disponible para ti el tiempo que tu lo requieras, medio tiempo, 6 horas o tiempo completo, con la mejor actitud y amor por lo que hacen.',
      url: CONST.waLinkServiciosDeLimpieza
    },
    {
      image: './assets/img/reparacion-mantenimiento-acabados.jpg',
      title: 'Reparación, mantenimiento y acabados.',
      description: 'Soluciones integrales para garantizar la operatividad y conservación de tus instalaciones.',
      url: CONST.waLinkReparacionMantenimientoAcabados
    }
  ]
}
