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

    @GetMapping("/ordering")
    public String ordering(){
        return "index.html";
    }

    @GetMapping("/post")
    public String post(){
        return "index.html";
    }


}
