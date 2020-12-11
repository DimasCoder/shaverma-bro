package dimasblack.shavermabro.service;

import dimasblack.shavermabro.model.Shaverma;
import dimasblack.shavermabro.repo.ShavermaRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShavermaService {
    @Autowired
    ShavermaRepo shavermaRepo;

    public Iterable<Shaverma> findAllShaverma(){
        return shavermaRepo.findAll();
    }

    public Shaverma createShaverma(Shaverma shaverma){
        return shavermaRepo.save(shaverma);
    }

    public Shaverma updateShaverma(Shaverma shavermaFromDb, Shaverma shaverma){
        BeanUtils.copyProperties(shaverma, shavermaFromDb, "id");
        return shaverma;
    }

    public void deleteShaverma(Shaverma shaverma){
        shavermaRepo.delete(shaverma);
    }
}
