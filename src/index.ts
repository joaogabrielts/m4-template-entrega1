import { IProduct, IProductList } from "./interfaces";

class ProductList implements IProductList {
  private product: IProduct[] = [];
  currentId: number = 1;
  createProduct(data: { name: string; price: number }): IProduct {
    const newProduct: IProduct = {
      id: this.currentId++,
      name: data.name,
      price: data.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.product.push(newProduct);
    return newProduct;
  }

  getProducts() {
    return this.product;
  }

  getOneProduct(id: number): IProduct | undefined {
    return this.product.find((product) => product.id === id);
  }

  updateProduct(id: number, data: { name: string; price: number }) {
    const products = this.product.find((product) => product.id === id);
    console.log(products);
    if (products) {
      if (data.name) products.name = data.name;
      if (data.price !== undefined) products.price = data.price;
    }

    return products;
  }

  deleteProduct(id: number): { message: string } {
    const index = this.product.findIndex((product) => product.id === id);

    this.product.splice(index, 1);
    return { message: "Product successfully deleted." };
  }
}

export const productList = new ProductList()
