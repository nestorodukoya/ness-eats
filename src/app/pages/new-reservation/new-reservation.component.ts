import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.css'
})
export class NewReservationComponent implements OnInit {
  
  reservationsArray: any[] = [];

  reservation: any = {
      id: 0,
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      numberOfGuests: 0,
      fulfilled: false
  };

  ngOnInit(): void {
    const savedReservations = localStorage.getItem('reservations');
    if (savedReservations != null){
      this.reservationsArray = JSON.parse(savedReservations);
    }
  }

  onReservationAdd() {
    this.reservation.id = this.reservationsArray.length + 1;
    this.reservationsArray.push(this.reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservationsArray));

    this.reservation = {
      id: 0,
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      numberOfGuests: 0,
      fulfilled: false
    };
  }

  onFulfilled(res: any) {
    this.reservation = res;
    res.fulfilled = true;

    localStorage.setItem('reservations', JSON.stringify(this.reservationsArray));

    this.reservation = {
      id: 0,
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      numberOfGuests: 0,
      fulfilled: false
    };
  }

  onCancel(id: number) {
    for (let i = 0; i < this.reservationsArray.length; i++) {
      if (this.reservationsArray[i].id == id) {
        this.reservationsArray.splice(i,1);
      }
    }
    localStorage.setItem('reservations', JSON.stringify(this.reservationsArray));
  }

}