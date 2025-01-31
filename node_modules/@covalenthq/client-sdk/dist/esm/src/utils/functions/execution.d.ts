import { type GoldRushClientSettings, type GoldRushResponse } from "../types/Generic.types";
export declare class Execution {
    private settings;
    private headers;
    private maxRetries;
    private retryDelay;
    private enableRetry;
    private processes;
    constructor(settings: GoldRushClientSettings, headers: Record<string, string>);
    execute<T>(endpoint: URL, parseData: (data: GoldRushResponse<T>) => GoldRushResponse<T>): Promise<GoldRushResponse<T>>;
}
