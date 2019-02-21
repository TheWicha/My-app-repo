
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { 
          id: 1, 
          title: 'Pressure Cooker Pesto Chicken Tetrazzini',
          slug: 'pressure-cooker-pesto-chicken-tetrazzini',
          content: 'Creamy pasta tetrazzini is such a crowd pleaser, and adding pesto only makes it more delicious! Put the two together and you end up with a seriously comforting and flavorful dish.          Tender chunks of chicken and carrots make it a one-pot meal, with protein, veggies, and pasta all in one pot. Pressure cooker dishes with dairy do take some special technique to cook well. If you’ve ever gotten a “burn” error on your electric pressure cooker’s front display, this might be why! Dairy cooked under pressure has a tendency to scorch, curdle, and otherwise misbehave, but you can absolutely use it in pressure cooker recipes. Just be sure to add the dairy ingredients after the dish has finished pressure cooking. You’ll want to use this method when making any creamy, dairy-filled dish that’s cooked directly in the pressure cooker’s inner pot, such as rice pudding, macaroni and cheese, and of course this pasta dish. Here, since the pesto cream sauce contains lots of dairy, you’ll add them in along with the diced carrots after the pasta and chicken are cooked under pressure, allowing the carrots to simmer in the sauce ‘til they’re just cooked through.',
          author: 'Nick Evans',
          thumbnail: 'https://www.simplyrecipes.com/wp-content/uploads/2019/01/IMG_6833-2-440x293.jpg',
          image:'https://www.simplyrecipes.com/wp-content/uploads/2019/01/IMG_6790-2-600x860.jpg',
          user_id: 3
        },
        {
          id: 2, 
          title: 'Goldfish Chicken Tenders',
          slug: 'goldfish-chicken-tenders',
          content: 'Goldfish Chicken Tenders are the ultimate kid-friendly snack that meets the ultimate kid-friendly dinner! These tenders are baked in the oven to crispy perfection. But guess what? Adults love them, too. Mashing up new ingredients into something familiar but slightly different is a great way to show kids how fun cooking can be. As a parent, this is a priority of mine in the kitchen.These Goldfish Chicken Tenders are a perfect example. 4-INGREDIENT CHICKEN TENDERS! We seem to have a never-ending supply of Goldfish cheese crackers at our house. I find them everywhere. In the car. In the couch. On the floor. One time I time found a Goldfish cracker in my shower. So finding a few cups of the super crispy, cheesy crackers to use on some chicken tenders was not hard. (I did not, however, repurpose the ones I found throughout the house.) All the other things you need for this recipe are basic pantry staples—flour, eggs, and of course, chicken tenders. While you could fry these, I prefer to bake them. The crackers get really crispy and form a satisfying crust, and cleanup is much easier if you bake them. If you don’t have an endless supply of Goldfish crackers in your house, like I do, you can also substitute crushed Cheez-Its, Ritz crackers, or any crispy cracker you have in your pantry.',
          author: 'Elise Bauer',
          thumbnail:'https://www.simplyrecipes.com/wp-content/uploads/2019/02/Goldfish_Chicken_Tenders_HERO00005-420x300.jpg',
          image:'https://www.simplyrecipes.com/wp-content/uploads/2019/02/Goldfish_Chicken_Tenders_HERO00004-600x840.jpg',
          user_id: 1
        },
        {
          id: 3, 
          title: 'Coconut Golden Milk',
          slug: 'coconut-golden-milk',
          content:'I am a beverage junkie. I typically have at least two going at once, a water bottle in my car that constantly.I am a beverage junkie. I typically have at least two going at once, a water bottle in my car that constantly.I am a beverage junkie. I typically have at least two going at once, a water bottle in my car that constantly.I am a beverage junkie. I typically have at least two going at once, a water bottle in my car that constantly.I am a beverage junkie. I typically have at least two going at once, a water bottle in my car that constantly.I am a beverage junkie. I typically have at least two going at once, a water bottle in my car that constantly.', 
          author: 'John Bosniak',
          thumbnail:'https://www.simplyrecipes.com/wp-content/uploads/2018/12/Golden-Milk-LEAD-HORIZONTAL-440x293.jpg',
          image:'https://www.simplyrecipes.com/wp-content/uploads/2018/12/Golden-Milk-LEAD-VERTICAL-600x840.jpg',
          user_id: 2
        },
        {
          id: 4, 
          title: 'Lasagna',
          slug: 'lasagna',
          content:'THE SECRET BEHIND THIS CLASSIC LASAGNA RECIPE From what I can tell, the secret behind Alton’s lasagna...', 
          author: 'Summer Miller',
          thumbnail:'https://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-a-2000-440x293.jpg',
          image:'https://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-a-2000-600x400.jpg',
          user_id: 2
        }
      ]);
    });
};
