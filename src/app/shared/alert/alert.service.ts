import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';



@Injectable()
export class AlertService {

  constructor() { }

  showAlert(message: string) {
    alertify.success(message);
  }

  confirm(message: string) {
    return new Promise((resolve, reject) => {
      alertify.confirm(
        message,
        () => { 
          resolve(true);
        },
        () => {
          resolve(false);
        })
        .set('labels', {ok:'Excluir', cancel:'Cancelar'})
        .set('title', 'Confirmar Exclusão');
    });
  }

}
