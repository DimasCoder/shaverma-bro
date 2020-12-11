package dimasblack.shavermabro.service;

import dimasblack.shavermabro.model.Product;
import dimasblack.shavermabro.repo.ProductRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    ProductRepo productRepo;

    public Iterable<Product> findAllProduct(){
        return productRepo.findAll();
    }

    public Product createProduct(Product product){
        return productRepo.save(product);
    }

    public Product updateProduct(Product productFromDb, Product product){
        BeanUtils.copyProperties(product, productFromDb, "id");
        return product;
    }

    public void deleteProduct(Product product){
        productRepo.delete(product);
    }
}
