import { ApiPage } from './api-page';

export interface ApiResponse<T> {
    content: ApiPage<T>;
    status: T;
}