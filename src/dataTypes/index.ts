// Data Object
interface Data {
  API?: string;
  Description?: string;
  Auth?: string;
  HTTPS?: boolean;
  Cors?: string;
  Link?: string;
  Category?: string;
}

// Home page
export interface HomeData {
  data: Data[];
  items: Data[];
  isLoading: boolean;
  options: string[];
}
// Category page

export interface CategoryData {
  categories: any[];
  items: Data[];
  data: Data[];
  isLoading: boolean;
  selected: string;
}

// Detail page
export interface DetailData {
  selectedItem: Data[];
  items: Data[];
  isLoading: boolean;
}

// Random page
export interface RandomData {
  items: Data[];
  item: Data[];
  isLoading?: boolean;
}
