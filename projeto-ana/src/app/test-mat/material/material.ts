import { ChangeDetectionStrategy , Component } from '@angular/core';
  import { MatButtonModule } from '@angular/material/button';
  import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material',
  standalone: true,
  templateUrl: './material.html',
  styleUrl: './material.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class Material {

}