export class Product {
    id = 1;
    products = [{
        id: this.id,
        item: "some product"
    }]

    addProduct(item: string) {
        this.id = this.id + 1;
        this.products.push({ id: this.id, item: item })
        console.log(this.products)

    }


}