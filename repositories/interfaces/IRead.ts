export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(uid: string): Promise<T>;
}