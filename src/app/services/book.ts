export interface Book {
    id: number,
    name: string,
    author: string,
    category: string,
    description: string,
    price: number,
    discount: number,
    imgPath: string[],
    isBestseller?: boolean
}
