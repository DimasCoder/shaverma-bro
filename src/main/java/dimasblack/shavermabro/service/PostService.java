package dimasblack.shavermabro.service;

import dimasblack.shavermabro.model.Post;
import dimasblack.shavermabro.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class PostService {
    @Autowired
    PostRepo postRepo;

    public Iterable<Post> findAllPosts(){
        return postRepo.findAll();
    }

    public Post findOnePost(Long id){
        return postRepo.getById(id);
    }

    public Post createPost(Post post){
        Date dateNow = new Date();
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("dd MMMM HH:mm");
        String date = String.format(formatForDateNow.format(dateNow));
        post.setDate(date);
        return postRepo.save(post);
    }

    public void deletePost(Long id){
        Post post = findOnePost(id);
        postRepo.delete(post);
    }
}
