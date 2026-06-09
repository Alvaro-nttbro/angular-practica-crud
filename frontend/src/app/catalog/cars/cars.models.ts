// export interface CarRecord {
//   id: string;
//   brand: BrandRecord;
//   model: ModelRecord;
//   carDetails: CarRecordDetails[];
//   total: number;
// }

// export interface CarRecordDetails {
//   registrationDate: string;
//   mileage: number;
//   currency: string;
//   price: number;
//   manufactureYear: number;
//   availability: boolean;
//   color: string;
//   description: string;
//   licensePlate: string;
// }

export interface CarBrandSummaryRecord {
  id: string;
  name: string;
}

export interface CarModelSummaryRecord {
  id: string;
  name: string;
}

export interface CarSummaryRecord {
  id: string;
  brand: CarBrandSummaryRecord;
  model: CarModelSummaryRecord;
  total: number;
  imageUrl: string;
}

export interface MetaPage {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface CarsPage {
  items: CarSummaryRecord[];
  meta: MetaPage;
}
