import { Component, ViewChild  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CardIconsComponent } from './card-icons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatSelectModule, MatMenuModule, RouterModule, MatCardModule, CommonModule, CardIconsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  macetas = [
    { nombre: 'Maceta 1', temperatura: '25°C', humedad: '60%', luzSolar: 'Alta', imagenUrl: '../../../assets/pot/maceta_1.png' },
    { nombre: 'Maceta 2', temperatura: '30°C', humedad: '50%', luzSolar: 'Baja', imagenUrl: '../../../assets/pot/maceta_2.png' },
    { nombre: 'Maceta 3', temperatura: '15°C', humedad: '40%', luzSolar: 'Alta', imagenUrl: '../../../assets/pot/maceta_3.png' },
  ];
}
