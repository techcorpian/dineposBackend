import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: Number, required: true },
  orderList: [
    {
      itemName: { type: String, required: true },
      itemQty: { type: String, required: true },
      itemDesc: { type: String, required: false },
      itemPrice: { type: Number, required: true },
    }
  ],
  subTotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  payableAmount: { type: Number, required: true },
  paymentMode: { type: String, required: true },
    razorpay_order_id : {type: String, required: false},
    razorpay_payment_id : {type: String, required: false},

},
{
  timestamps: true, // Automatically adds createdAt and updatedAt fields
}
);

export const Order = mongoose.model('Order', orderSchema);


