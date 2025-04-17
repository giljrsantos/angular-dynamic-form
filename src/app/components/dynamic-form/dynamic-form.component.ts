import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FORM_FIELDS } from '../../../assets/form-fields/form-fields';
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    NzCardModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  formGroup!: FormGroup;
  fields = FORM_FIELDS;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
  ){}

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
    this.fields.forEach(field => {
      this.formGroup.addControl(
        field.key,
        this.fb.control('', field.required ? Validators.required: [])
      );
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.message.success('Formulário enviado com sucesso!');
    } else {
      this.message.error('Preencha todos os campos obrigatórios!');
    }
  }
}
