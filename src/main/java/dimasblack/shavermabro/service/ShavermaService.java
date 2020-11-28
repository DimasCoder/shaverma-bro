package dimasblack.shavermabro.service;

import dimasblack.shavermabro.dao.Shaverma;
import dimasblack.shavermabro.repo.ShavermaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShavermaService {
    @Autowired
    ShavermaRepo shavermaRepo;

    public Iterable<Shaverma> findAllShaverma(){
        return shavermaRepo.findAll();
    }

    public Shaverma findOneShaverma(Long id){
        return shavermaRepo.getById(id);
    }

    public Shaverma createShaerma(Shaverma shaverma){
        return shavermaRepo.save(shaverma);
    }

    public void deleteShaverma(Long id){
        Shaverma shaverma = findOneShaverma(id);
        shavermaRepo.delete(shaverma);
    }
}
