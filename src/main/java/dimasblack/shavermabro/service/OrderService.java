package dimasblack.shavermabro.service;

import dimasblack.shavermabro.model.Order;
import dimasblack.shavermabro.repo.OrderRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;

    public Iterable<Order> findAllOrders(){
        return orderRepo.findAll();
    }

    public Order createOrder(Order order){
        Date dateNow = new Date();
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("dd MMMM HH:mm");
        String date = String.format(formatForDateNow.format(dateNow));
        order.setDate(date);
        return orderRepo.save(order);
    }

    public Order updateOrder(Order orderFromDb, Order order){
        BeanUtils.copyProperties(order, orderFromDb, "id");
        return order;
    }

    public void deleteOrder(Order order){
        orderRepo.delete(order);
    }
}
