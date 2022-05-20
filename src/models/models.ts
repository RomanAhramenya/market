interface IRating {
  rate: number;
  count: number;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
export interface IProducts {
  products: {
    [key: string]: IProduct[];
  };
  isLoading: boolean;
  error: string;
}
export interface IGetPorjectAxios {
    key:string 
    data:IProduct[]

}
export interface IGetCurrentPorjectAxios {
    key:string
    data:IProduct
}
export interface IBasket {
  id:number
  title:string
  price:number
  image:string
  count:number
}