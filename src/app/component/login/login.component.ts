import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatButtonModule, MatDividerModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

  togglePasswordVisibility(input: HTMLInputElement): void {
    input.type = this.hide ? 'text' : 'password';
    this.hide = !this.hide;
  }

  isForgotPasswordView = false;

  toggleForgotPasswordView() {
    this.isForgotPasswordView = !this.isForgotPasswordView;
  }
}
