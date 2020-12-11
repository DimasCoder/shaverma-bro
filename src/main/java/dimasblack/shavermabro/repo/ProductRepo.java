package dimasblack.shavermabro.repo;

import dimasblack.shavermabro.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {

    Product getById(Long id);
}
