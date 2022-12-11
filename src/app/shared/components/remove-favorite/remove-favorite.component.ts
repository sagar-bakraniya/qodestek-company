import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-favorite',
  templateUrl: './remove-favorite.component.html',
  styleUrls: ['./remove-favorite.component.scss']
})
export class RemoveFavoriteComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialogRef<RemoveFavoriteComponent>
  ) { }

  remove() {
    this.matDialog.close(true);
  }
}
