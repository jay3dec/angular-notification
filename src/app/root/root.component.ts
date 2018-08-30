import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../utility/notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private notifyService : NotificationService) { }

  ngOnInit() {
  	
  }

  showToaster(){
  	this.notifyService.showSuccess("Data shown successfully !!", "Notification")
  }

  showToasterWithTimeout(){
    this.notifyService.showSuccessWithTimeout("Data shown successfully !!", "Notification", 1000)
  }

  showHtmlToaster(){
    this.notifyService.showHTMLMessage("<h2>Data shown successfully !!</h2>", "Notification")
  }

}
