import { NgModule } from '@angular/core';

export const STRINGS = {
  apiUrl: 'http://localhost:8080',
  serverUrl: 'http://localhost:4200'
};

@NgModule({
  providers: [
    { provide: 'Strings', useValue: STRINGS }
  ]
})
export class StringsModule { }
