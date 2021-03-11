import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // Declaração dos campos
  declarations: [ InputTextComponent,
                  InputNumberComponent,
                  InputDateComponent,
                  InputTextareaComponent,
                  InputSelectComponent ],
  // Importação das dependências
  imports: [  CommonModule,
              MaterialModule,
              ReactiveFormsModule,
              FormsModule
  ],
  // Exportando os campos
  exports: [  InputTextComponent,
              InputNumberComponent,
              InputDateComponent,
              InputTextareaComponent,
              InputSelectComponent ],
})
export class CamposModule { }
