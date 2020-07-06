import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss']
})
export class MenuModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MenuModalComponent>
  ) { }

  ngOnInit() {
  }

  itemClicked(url: string) {
    this.dialogRef.close(url);
  }

}
