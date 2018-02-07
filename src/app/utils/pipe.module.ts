import { NgModule } from '@angular/core';
import { CountryPipe } from './countries/country.pipe';

@NgModule({
  imports: [],
  declarations: [CountryPipe],
  exports: [CountryPipe]
})
export class PipeModule {}
