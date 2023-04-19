import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit{
  persona: persona = null;

  constructor(private personaService: PersonaService, private activatedRour: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const id = this.activatedRour.snapshot.params['id'];
    this.personaService.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      }, error: (err) => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
  });
  }
  onUpdate(): void{
    const id = this.activatedRour.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    });
  }

  uploadImage($event:any){

  }
}
