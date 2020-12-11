package dimasblack.shavermabro.controller;

import dimasblack.shavermabro.model.Shaverma;
import dimasblack.shavermabro.service.ShavermaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/shaverma")
@CrossOrigin(origins = "http://localhost:8080/", allowedHeaders = "http://localhost:8080/")
public class ShavermaController {

    @Autowired
    ShavermaService shavermaService;

    @GetMapping("/all")
    public Iterable<Shaverma> allShavermas(){
        return shavermaService.findAllShaverma();
    }

    @GetMapping("{id}")
    public Shaverma oneShaverma(@PathVariable("id") Shaverma shaverma){
        return shaverma;
    }

    @PostMapping
    public Shaverma createShaverma(@RequestBody Shaverma shaverma){
        return shavermaService.createShaverma(shaverma);
    }

    @PutMapping("{id}")
    public Shaverma updateShaverma(@PathVariable("id") Shaverma shavermaFromDb, @RequestBody Shaverma shaverma){
        return shavermaService.updateShaverma(shavermaFromDb, shaverma);
    }

    @DeleteMapping("{id}")
    public void deleteShaverma(@PathVariable("id") Shaverma shaverma){
        shavermaService.deleteShaverma(shaverma);
    }
}
