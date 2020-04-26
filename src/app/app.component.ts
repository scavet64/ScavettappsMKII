import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MenuModalComponent } from './menu-modal/menu-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Scavettapps: Homepage';

  public constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  menuClicked() {
    const dialogRef = this.dialog.open(MenuModalComponent);

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        if (result === 'homepage') {
          result = '';
        }
        this.router.navigateByUrl(result);
      }

    });
  }
}
