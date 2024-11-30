import { type Quote } from "../types/Generic.types";
export declare const prettifyCurrency: (value: number | bigint | string, decimals?: number, currency?: Quote, ignoreSmallValue?: boolean, ignoreMinus?: boolean, ignoreZero?: boolean) => string;
