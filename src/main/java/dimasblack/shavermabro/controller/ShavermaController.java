package dimasblack.shavermabro.controller;

import dimasblack.shavermabro.dao.Shaverma;
import dimasblack.shavermabro.service.ShavermaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/shaverma")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ShavermaController {

    @Autowired
    ShavermaService shavermaService;

    @GetMapping("/all")
    public Iterable<Shaverma> allShavermas(){
        return shavermaService.findAllShaverma();
    }

    @GetMapping("{id}")
    public Shaverma oneShaverma(@PathVariable Long id){
        return shavermaService.findOneShaverma(id);
    }

    @PostMapping
    public Shaverma createShaverma(@RequestBody Shaverma shaverma){
        return shavermaService.createShaerma(shaverma);
    }

    @PutMapping("{id}")
    public Shaverma updateShaverma(@PathVariable("id") Shaverma shaverma){
        return null;
    }

    @DeleteMapping("{id}")
    public void deleteShaverma(@PathVariable Long id){
        shavermaService.deleteShaverma(id);
    }
}
