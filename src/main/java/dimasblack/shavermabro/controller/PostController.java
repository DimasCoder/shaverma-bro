package dimasblack.shavermabro.controller;

import dimasblack.shavermabro.model.Post;
import dimasblack.shavermabro.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/post")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("/all")
    public Iterable<Post> allPosts(){
        return postService.findAllPosts();
    }

    @GetMapping("{id}")
    public Post onePost(@PathVariable("id") Post post){
        return post;
    }

    @PostMapping
    public Post createPost(@RequestBody Post post){
        return postService.createPost(post);
    }

    @PutMapping("{id}")
    public Post updatePost(@PathVariable("id") Post postFromDb, @RequestBody Post post){
        return postService.updatePost(postFromDb, post);
    }

    @DeleteMapping("{id}")
    public void deletePost(@PathVariable("id") Post post){
        postService.deletePost(post);
    }


}
