package dimasblack.shavermabro.controller;

import dimasblack.shavermabro.dao.Order;
import dimasblack.shavermabro.repo.OrderRepo;
import dimasblack.shavermabro.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    OrderService orderService;

    @GetMapping("/all")
    public Iterable<Order> getAllOrders(){
        return orderRepo.findAll();
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order){
        return orderService.createOrder(order);
    }
}
