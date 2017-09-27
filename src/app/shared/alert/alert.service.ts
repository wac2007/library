import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';



@Injectable()
export class AlertService {

  constructor() { }

  showAlert(message: string) {
    alertify.success(message);
  }

}
