import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-editestudio',
  templateUrl: './editestudio.component.html',
  styleUrls: ['./editestudio.component.css']
})
export class EditestudioComponent implements OnInit {
  estudio: Estudio = null;
  constructor(private estudioS: EstudioService, private activatedRour: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRour.snapshot.params['id'];
    this.estudioS.detail(id).subscribe({
      next: (data) => {
        this.estudio = data;
      }, error: (err) => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
  });
  }

  onUpdate(): void {
    const id = this.activatedRour.snapshot.params['id'];
    this.estudioS.update(id, this.estudio).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar el estudio");
        this.router.navigate(['']);
      }
    });
  }
}


