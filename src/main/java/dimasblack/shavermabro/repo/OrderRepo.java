package dimasblack.shavermabro.repo;

import dimasblack.shavermabro.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {

    Order getById(Long id);

}
