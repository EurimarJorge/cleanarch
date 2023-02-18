import Product from "../../../domain/product/entity/product";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import {
  InputCreateProductDto,
  OutputCreateProductDto,
} from "./create.product.dto";

export default class CreateCustomerUseCase {
  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(
    input: InputCreateProductDto
  ): Promise<OutputCreateProductDto> {
    const p = new Product("123", input.name, input.price);
    await this.productRepository.create(p);
    
//    const prodA = new Product("1",input.name, input.price);

    return {
      id: "1",
      name: p.name,
      price: p.price,
    };
  }
}
