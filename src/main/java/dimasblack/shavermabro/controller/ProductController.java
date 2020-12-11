package dimasblack.shavermabro.controller;

import dimasblack.shavermabro.model.Product;
import dimasblack.shavermabro.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/product")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/all")
    public Iterable<Product> allProducts(){
        return productService.findAllProduct();
    }

    @GetMapping("{id}")
    public Product oneProduct(@PathVariable("id") Product product){
        return product;
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }

    @PutMapping("{id}")
    public Product updateProduct(@PathVariable("id") Product productFromDb, @RequestBody Product product){
        return productService.updateProduct(productFromDb, product);
    }

    @DeleteMapping("{id}")
    public void deleteProduct(@PathVariable("id") Product product){
        productService.deleteProduct(product);
    }
}
