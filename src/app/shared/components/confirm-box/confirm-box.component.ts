import { Component, OnInit } from '@angular/core'
import { ConfirmService } from 'app/shared/services/confirm.service'

@Component({
  selector: 'confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  public data: any
  public isOpen: boolean

  constructor(
    private confirmService: ConfirmService
  ) { }

  ngOnInit() {
    this.confirmService.connent((data) => {
      this.isOpen = data !== undefined && data !== null
      this.data = data
    })
  }

  emit (val) {
    this.confirmService.send(val)
  }

}
