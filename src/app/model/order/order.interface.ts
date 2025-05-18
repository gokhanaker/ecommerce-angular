export interface IOrderData {
  orderId: string;
  address: string;
  totalPurchasePrice: number;
  [key: string]: any; // For any additional fields
} 