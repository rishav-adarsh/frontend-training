export type ProductType = {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productStock: number;
  productSalePrice: number;
};

export interface UserType {
  localId:      string;
  email:        string;
  displayName:  string;
  idToken:      string;
  registered:   boolean;
  refreshToken: string;
  expiresIn:    string;
}