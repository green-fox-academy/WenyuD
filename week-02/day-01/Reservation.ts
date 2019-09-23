'use strict';

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation implements Reservationy {
    DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    codeList: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    getDowBooking() {
        return this.DOW[Math.floor(Math.random()*7)];
    }
    getCodeBooking() {
        let code = '';
        for (let i = 0; i < 8; i++) {
            code = code.concat(this.codeList[Math.floor(Math.random()*36)]);
        }
        return code;
    }

    getBookingInformation() {
        return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}.`
    }
}

let reservation = new Reservation();
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());
console.log(reservation.getBookingInformation());