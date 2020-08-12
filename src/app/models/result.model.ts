export interface Result<T> {
  id?: number;
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
}
