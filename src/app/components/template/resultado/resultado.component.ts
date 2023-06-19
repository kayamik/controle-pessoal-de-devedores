import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  devedor!: Devedor;
  @Input() devedores: Devedor[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.devedores = this.devedores.filter((t) => {
      return t.id === idParam;
    });

    this.devedor = this.devedores[0];
  }

  onSubmit() {}
}
