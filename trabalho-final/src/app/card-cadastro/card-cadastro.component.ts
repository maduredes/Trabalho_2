import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.component.html',
  styleUrls: ['./card-cadastro.component.scss']
})
export class CardCadastroComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.getFormGroup();
    const tempoCookies = new Date(new Date().getTime() + 1 * 60 * 1000);
    document.cookie = JSON.stringify({
      nome: 'Marcos',
      expires: tempoCookies
    });
  }

  public limparFormulario() {
    this.formGroup.reset();
  }

  public salvarFormulario() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const simularLimite = localStorage.getItem("simularLimite");
    if (simularLimite) {
      const formSimular = JSON.parse(simularLimite);
      if (formSimular && formSimular.length) {
        formSimular.push(this.formGroup.getRawValue());
        localStorage.setItem("simularLimite", JSON.stringify(formSimular));
      }
    } else {
      const list = [];
      list.push(this.formGroup.getRawValue());
      localStorage.setItem("simularLimite", JSON.stringify(list));
    }
    alert(localStorage.getItem("simularLimite"));
  }

  private getFormGroup() {
    const formGroup = this.formBuilder.group({
      nome: [{ value: undefined, disabled: false }, Validators.required],
      cidade: [{ value: undefined, disabled: false }, Validators.required],
      estado: [{ value: undefined, disabled: false }, Validators.required],
      pais: [{ value: undefined, disabled: false }, Validators.required],
      dataNascimento: [{ value: undefined, disabled: false }, Validators.required],
      rendaMensal: [{ value: undefined, disabled: false }, Validators.required],
    });

    return formGroup;
  }
}
