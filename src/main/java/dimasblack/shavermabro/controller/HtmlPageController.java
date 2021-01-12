package dimasblack.shavermabro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlPageController {

    @GetMapping("/delivery")
    public String delivery(){
        return "index.html";
    }

    @GetMapping("/reviews")
    public String reviews(){
        return "index.html";
    }

    @GetMapping("/faq")
    public String faq(){
        return "index.html";
    }

    @GetMapping("/post")
    public String post(){
        return "index.html";
    }

    @GetMapping("/cart")
    public String cart(){
        return "index.html";
    }

    @GetMapping("/checkout")
    public String checkout(){
        return "index.html";
    }

    @GetMapping("/complete")
    public String complete(){
        return "index.html";
    }


}
