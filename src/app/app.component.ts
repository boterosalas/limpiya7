import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet, Event, Scroll } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { register } from 'swiper/element/bundle';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
register();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'limpiya7';
}
