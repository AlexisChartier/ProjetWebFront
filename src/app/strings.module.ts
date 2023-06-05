import { NgModule } from '@angular/core';

export const STRINGS = {
  apiUrl: 'https://apiback-ogcv.onrender.com',
  serverUrl: 'https://deli-b1cx.onrender.com/'
};

@NgModule({
  providers: [
    { provide: 'Strings', useValue: STRINGS }
  ]
})
export class StringsModule { }
