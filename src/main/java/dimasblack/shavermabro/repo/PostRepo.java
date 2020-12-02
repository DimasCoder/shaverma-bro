package dimasblack.shavermabro.repo;

import dimasblack.shavermabro.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends JpaRepository<Post, Long> {

    Post getById(Long id);
}

