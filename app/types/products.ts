interface IProducts {
    _id: string,
    title: string,
    desc?: string,
    color?: string,
    stock?: number,
    price?: number,
    createdAt?: string,
    updatedAt?: string,
    size?: string
}

export interface IProductsPromise {
    count: number,
    products: IProducts[]
}