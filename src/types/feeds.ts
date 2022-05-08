
export interface IOrderFeed {
    readonly createdAt:string;
    readonly ingredients: Array<string>;
    readonly name: string;
    readonly number: number;
    readonly status: string;
    readonly updatedAt: string;
    readonly _id: string;
}