export type SearchQuerySort<T> = { [Property in keyof Partial<T>]: -1 | 1 }

export type SearchQuery<T> = { limit?: number; sort?: SearchQuerySort<T> }
