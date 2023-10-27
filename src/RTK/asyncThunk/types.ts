export interface Iitem {
    authorId: number,
    created: string,
    id: 0,
    imgUrl: string,
    locationId: 0,
    name: string
  }

export interface IResponseProduct {
  products: Iitem[],
  limit: number;
  totalPages: number;
  count: number;
  currentPage: number;
  query: any;
}


export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',

}


export interface IitemsSliceState {
  items: any;
  countPages: number;
  currentPage: number;
  status: Status;
  authorId: any;
}