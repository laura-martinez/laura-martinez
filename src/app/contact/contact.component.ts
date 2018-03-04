import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lmp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactInfo: {[key:string]: string} = {}
  public mailtoInfo: string
  public phoneNumber: string = `+447534054710`
  private email: string = `fotografia.lauram@gmail.com`
  private emailSubject: string = `Quote request`
  private emailBody: string = `Hi, I'd like to request a quote for <please specify the nature of your query here>`

  constructor() {
    this.renderEmailInfo()
  }

  ngOnInit() {
  }

  private renderEmailInfo(): void {
    this.mailtoInfo = `mailto:${encodeURIComponent(this.email)}?subject=${encodeURIComponent(this.emailSubject)}&body=${encodeURIComponent(this.emailBody)}`
  }
}
