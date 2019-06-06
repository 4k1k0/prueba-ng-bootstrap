import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fechaHoy: any;
  haceUnAno: any;
  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    this.obtenerHoy();
  }

  obtenerHoy() {
    this.seleccionarFecha();
    const a = moment().format('YYYY/MM/DD');
    const b = moment().subtract(1, 'year').format('YYYY/MM/DD');
    this.fechaHoy = this.generaFecha(a);
    this.haceUnAno = this.generaFecha(b);
  }

  generaFecha(f) {
    const datos = f.split('/');
    return {
      year: parseInt(datos[0]),
      month: parseInt(datos[1]),
      day: parseInt(datos[2])
    }
  }

  seleccionarFecha() {
    this.model = this.calendar.getToday();
  }

}
