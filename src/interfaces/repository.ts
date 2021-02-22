export interface IRepository<T> {
    get(id:string);
    getAll();
    find(item: Partial<T>);
    add(item: Partial<T>);
    update(id: string, item: Partial<T>);
    delete(id: string);
}
