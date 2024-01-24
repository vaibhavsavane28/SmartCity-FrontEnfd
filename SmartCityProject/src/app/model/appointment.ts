export class Appointment {
  
  appointmentDate: string;
  email: string;
  hospitalName: string;
  services: string;
  timeSlot: string;

  constructor() {
    this.appointmentDate = '';
    this.email = '';
    this.hospitalName = '';
    this.services = '';
    this.timeSlot = '';
  }
}
