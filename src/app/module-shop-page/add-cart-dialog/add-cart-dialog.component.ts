import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShopItemsService } from 'src/app/services/service-shop-tems/shop-items.service';

@Component({
  selector: 'app-add-cart-dialog',
  templateUrl: './add-cart-dialog.component.html',
  styleUrls: ['./add-cart-dialog.component.scss']
})
export class AddCartDialogComponent {

  constructor(
    private shopItemsService: ShopItemsService,
    public dialogRef: MatDialogRef<AddCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cartItem) {
    }

  onSubmit() {
    this.shopItemsService.addCartItem(this.cartItem).subscribe(() => this.dialogRef.close());
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
