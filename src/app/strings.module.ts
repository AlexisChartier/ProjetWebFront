import { NgModule } from '@angular/core';

export const STRINGS = {
  apiUrl: 'https://apiback-ogcv.onrender.com',
  serverUrl: 'http://localhost:4200'
};

@NgModule({
  providers: [
    { provide: 'Strings', useValue: STRINGS }
  ]
})
export class StringsModule { }
