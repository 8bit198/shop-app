import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShopItemsService } from 'src/app/services/service-shop-tems/shop-items.service';

@Component({
  selector: 'app-add-cart-dialog',
  templateUrl: './add-cart-dialog.component.html',
  styleUrls: ['./add-cart-dialog.component.scss']
})
export class AddCartDialogComponent {

  constructor(
    public shopItemsService: ShopItemsService,
    public dialogRef: MatDialogRef<AddCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cartItem) {
    }

  onSubmit() {
    this.shopItemsService.addCartItem(this.cartItem).subscribe(() => {
      this.dialogRef.close('add');
      this.shopItemsService.getCartItems().subscribe(
        res => {
          this.shopItemsService.currentCartItems = res;
          this.shopItemsService.cartlistActivate(this.shopItemsService.currentCartItems);
        }
      );
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
