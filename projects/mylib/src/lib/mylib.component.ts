import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  standalone: true,
  imports: [],
  template: `
    <p>
      mylib works!
    </p>
  `,
  styles: ``
})
export class MylibComponent {
  @Input()
  myInput!: string;
}
