import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-newestudio',
  templateUrl: './newestudio.component.html',
  styleUrls: ['./newestudio.component.css']
})
export class NewestudioComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  constructor(private estudioS: EstudioService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const estudio = new Estudio(this.nombreE, this.descripcionE)
    this.estudioS.save(estudio).subscribe({
      next: (data) => {
        alert('Educación añadida');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    });
  }

}
