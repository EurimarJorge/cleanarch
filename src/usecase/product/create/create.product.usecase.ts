import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import {
  InputCreateProductDto,
  OutputCreateProductDto,
} from "./create.product.dto";
import ProductFactory from "../../../domain/product/factory/product.factory";
import Product from "../../../domain/product/entity/product";

export default class CreateCustomerUseCase {
  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(
    input: InputCreateProductDto
  ): Promise<OutputCreateProductDto> {
    const product = ProductFactory.create(
      "a",
      input.name,
      input.price,
    );
    const prodA = new Product("1",input.name, input.price);

    await this.productRepository.create(prodA);

    return {
      id: "1",
      name: product.name,
      price: product.price,
    };
  }
}
