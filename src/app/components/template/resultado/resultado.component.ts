import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  devedor!: Devedor;
  @Input() devedores: Devedor[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.devedor = new Devedor ('0', '', '', '', 0, 0, false)
    this.devedor = new Devedor ('1', 'Jurídica', 'João', '123', 1231, 5, true)
    this.devedores.push(this.devedor)
    this.devedor = new Devedor ('2', 'Física', 'Maria', '123', 1231, 3, true)
    this.devedores.push(this.devedor)
    this.devedor = new Devedor ('3', 'Jurídica', 'Pedro', '112313', 1, 1, false)
    this.devedores.push(this.devedor)
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.devedores = this.devedores.filter((t) => {
      return t.id === idParam;
    });

    this.devedor = this.devedores[0];
  }

  onSubmit() {
  }

}

