package dimasblack.shavermabro.service;

import dimasblack.shavermabro.dao.Order;
import dimasblack.shavermabro.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;

    public Order createOrder(Order order){
        Date dateNow = new Date();
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("dd MMMM HH:mm");
        String date = String.format(formatForDateNow.format(dateNow));
        order.setDate(date);
        return orderRepo.save(order);
    }
}
