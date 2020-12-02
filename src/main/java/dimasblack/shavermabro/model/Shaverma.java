package dimasblack.shavermabro.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Shaverma {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String foodName;
    private String recipe;
    private int priceMini;
    private int priceMiddle;
    private int priceMaxi;
    private String category;
    private String image;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }

    public int getPriceMini() {
        return priceMini;
    }

    public void setPriceMini(int priceMini) {
        this.priceMini = priceMini;
    }

    public int getPriceMiddle() {
        return priceMiddle;
    }

    public void setPriceMiddle(int priceMiddle) {
        this.priceMiddle = priceMiddle;
    }

    public int getPriceMaxi() {
        return priceMaxi;
    }

    public void setPriceMaxi(int priceMaxi) {
        this.priceMaxi = priceMaxi;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
