class Restaurant {
    constructor(name, city, favoriteDrink, favoriteFood, isVegan) {
      this.name = name;
      this.city = city;
      this.favoriteDrink = favoriteDrink;
      this.favoriteFood = favoriteFood;
      this.isVegan = isVegan;
    }
  
    get favoriteDrink() {
      return this._favoriteDrink;
    }
  }
  
  const restaurant = new Restaurant(
    name="Restoran ABC",
    city="Jakarta",
    favoriteDrink="Es Kopi Susu",
    favoriteFood="Nasi Goreng",
    isVegan=true,
  );
  
  // 2. Buatlah variabel bernama name,
  // Kemudian isi dengan nilai name dari properti object restaurant
  
  const name = restaurant.name;
  
  // 3. Buatlah vartabel bernama favoriteDrink.
  // Kemudian isi dengan nilat “favorite drink’ dari property object restaurant
  
  const favoriteDrink = restaurant.favoriteDrink;