package dimasblack.shavermabro.controller;

import dimasblack.shavermabro.model.Order;
import dimasblack.shavermabro.repo.OrderRepo;
import dimasblack.shavermabro.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/all")
    public Iterable<Order> getAllOrders(){
        return orderService.findAllOrders();
    }

    @GetMapping("{id}")
    public Order getOneOrder(@PathVariable("id") Order order){
        return order;
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order){
        return orderService.createOrder(order);
    }

    @PutMapping("{id}")
    public Order updateOrder(@PathVariable("id") Order orderFromDb, Order order){
        return orderService.updateOrder(orderFromDb, order);
    }

    @DeleteMapping("{id}")
    public void deleteOrder(@PathVariable("id") Order order){
        orderService.deleteOrder(order);
    }
}
