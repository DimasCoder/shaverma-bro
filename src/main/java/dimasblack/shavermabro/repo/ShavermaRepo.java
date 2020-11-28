package dimasblack.shavermabro.repo;

import dimasblack.shavermabro.dao.Shaverma;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShavermaRepo extends JpaRepository<Shaverma, Long> {

    Shaverma getById(Long id);
}
