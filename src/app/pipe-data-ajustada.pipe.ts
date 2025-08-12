import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDataAjustada'
})
export class PipeDataAjustadaPipe implements PipeTransform {

  transform(value: string): string {
   let dia, mes, ano ='';
   dia = value.split('/').slice(1,2);
   mes = value.split('/').slice(0,1);
   ano = value.split('/').slice(2)+"";

  return  dia + " / "+ mes + " / "+ano;
  }

}
