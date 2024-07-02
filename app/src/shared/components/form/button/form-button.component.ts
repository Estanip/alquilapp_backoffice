import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss',
})
export class FormButtonComponent {
  @Input() class!: string;
  @Input() color!: string;
  @Input() disabled!: boolean;
  @Input() clickHandler!: EventEmitter<string | FormGroup>;
  @Input() clickHandlerMethod!: string;
  @Input() clickHandlerParameter!: string | FormGroup;
  @Input() text!: string;
  @Input() type!: string;

  onClick() {
    if (this.clickHandler && this.clickHandlerMethod === 'eventEmitter')
      this.clickHandler.emit(this.clickHandlerParameter);
  }
}
