export interface IEndpointCollection<T> {
    collectionName: string;
    items: Partial<T>[];
}
