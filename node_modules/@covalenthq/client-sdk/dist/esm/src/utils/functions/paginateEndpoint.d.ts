import { type GoldRushResponse, type Nullable, type Pagination, type PaginationLinks } from "../types/Generic.types";
import { type Execution } from "./execution";
export declare function paginateEndpoint<T extends Nullable<{
    pagination: Pagination;
}> | Nullable<{
    links: PaginationLinks;
}> | null>(endpoint: URL, execution: Execution, parseData: (data: GoldRushResponse<T>) => GoldRushResponse<T>, implementation: "pagination" | "links"): AsyncIterable<GoldRushResponse<T>>;
