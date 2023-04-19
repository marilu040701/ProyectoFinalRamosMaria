import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit{
  expLab: Experiencia = null;
  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe({
      next: (data) => {
        this.expLab = data;
      }, error: (err) =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
  });
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
  });
  }
}
