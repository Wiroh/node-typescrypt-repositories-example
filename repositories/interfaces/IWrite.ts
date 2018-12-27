export interface IWrite<T> {
    create(item: T): Promise<T>;
    update(uid: string, item: T): Promise<T>;
    delete(uid: string): Promise<boolean>;
}