import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  display = "none";
  openModal(receipt: any) {
    receipt.display = "block";
  }
  onCloseHandled(receipt: any) {
    receipt.display = "none";
  }
  receipts: any[] = [
    {
      id:1,
      imgsrc:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg',
      title: 'Spaghetti Carbonara',
      origin: 'Italian',
      description: 'A classic Italian pasta dish with creamy egg and cheese sauce.',
      display: 'none',
      ingredients:[
        '8 oz (225g) spaghetti',
        '2 large eggs',
        '1 cup grated Pecorino Romano cheese',
        '4 oz (113g) pancetta or guanciale, diced',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste'
      ],
      preparation:[
        '1- Bring a large pot of salted water to a boil.',
        '2- Add the spaghetti to the boiling water and cook according to the package instructions until they are al dente.',
        '3- Drain the cooked spaghetti and reserve one cup of the cooking water.',
        '4- While the pasta is cooking, prepare the Carbonara sauce.',
        '5- In a large bowl, whisk the eggs with half of the grated Pecorino Romano cheese. Season with freshly ground black pepper.',
        '6- In a medium skillet over medium heat, cook the diced pancetta or guanciale until crispy. You don\'t need to add any additional fat, as the pancetta will release its own fat. Add the minced garlic and sauté for one minute until fragrant.',
        '7- Once the pasta is drained, immediately add it to the skillet with the pancetta and garlic. Toss the pasta to coat it evenly with the pancetta fat.',
        '8- Remove the skillet from the heat. Quickly pour the egg and cheese mixture over the hot pasta and toss vigorously. Ensure that the heat from the pasta cooks the eggs, but be cautious not to overcook them. If the sauce seems too thick, add some of the reserved cooking water to adjust the consistency.',
        '9- Serve immediately, garnished with the remaining grated Pecorino Romano cheese and freshly ground black pepper.'
      ]
    },
    {
      id: 2,
      imgsrc: 'https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg',
      title: 'Chicken Stir-Fry',
      origin: 'Chinese',
      description: 'A quick and delicious stir-fry with chicken and mixed vegetables.',
      display: 'none',
      ingredients: [
        '1 lb (450g) boneless, skinless chicken breasts, sliced into strips',
        '2 cups mixed vegetables (bell peppers, broccoli, carrots, snow peas, etc.), chopped',
        '3 cloves garlic, minced',
        '2 tablespoons soy sauce',
        '1 tablespoon oyster sauce',
        '1 tablespoon sesame oil',
        '1 tablespoon vegetable oil',
        'Salt and pepper to taste'
      ],
      preparation:[
        '1- In a small bowl, mix together the soy sauce, oyster sauce, and sesame oil. Set aside.',
        '2- Heat the vegetable oil in a large skillet or wok over high heat.',
        '3- Add the minced garlic and sauté for about 30 seconds or until fragrant.',
        '4- Add the sliced chicken breast strips to the hot skillet. Stir-fry for 2-3 minutes or until the chicken is no longer pink and is cooked through. Remove the chicken from the skillet and set it aside.',
        '5- In the same skillet, add a bit more vegetable oil if needed and then add the chopped mixed vegetables. Stir-fry the vegetables for 3-4 minutes or until they are tender-crisp.',
        '6- Return the cooked chicken to the skillet with the vegetables.',
        '7- Pour the sauce mixture (soy sauce, oyster sauce, and sesame oil) over the chicken and vegetables in the skillet. Stir-fry for an additional 1-2 minutes to combine everything and heat through.',
        '8- Season with salt and pepper to taste. You can adjust the seasoning according to your preference.',
        '9- Serve the chicken stir-fry hot and enjoy!'
      ]
    },
    {
      id: 3,
      imgsrc: 'https://cuisinovores.com/wp-content/uploads/2023/05/photo_guacamole_facile_midjourney.jpg',
      title: 'Guacamole',
      origin: 'Mexican',
      description: 'A classic Mexican dip made with mashed avocados, tomatoes, onions, and lime juice.',
      display: 'none',
      ingredients: [
        '3 ripe avocados',
        '1 lime, juiced',
        '1 teaspoon salt',
        '1 teaspoon ground cumin',
        '1 teaspoon cayenne pepper',
        '1 medium onion, diced',
        '2 Roma (plum) tomatoes, diced',
        '1 tablespoon chopped fresh cilantro',
        '1 clove garlic, minced'
      ],
      preparation:[
        '1- Cut the ripe avocados in half, remove the pits, and scoop the flesh into a mixing bowl.',
        '2- Mash the avocados using a fork or potato masher until you achieve your desired level of smoothness. Some chunks are okay for added texture.',
        '3- Add the lime juice, salt, ground cumin, and cayenne pepper to the mashed avocados. Mix well to combine the ingredients evenly.',
        '4- Stir in the diced onion, diced Roma tomatoes, chopped fresh cilantro, and minced garlic. Mix until all the ingredients are well incorporated.',
        '5- Taste the guacamole and adjust the seasoning if necessary by adding more salt, lime juice, or cayenne pepper to suit your preferences.',
        '6- Transfer the guacamole to a serving bowl, cover it with plastic wrap (press the wrap directly against the surface of the guacamole to prevent browning), and refrigerate until you re ready to serve.',
        '7- Serve the guacamole with tortilla chips or as a delicious dip for your favorite Mexican dishes. Enjoy!'
      ]
    },
    {
      id: 4,
      imgsrc: 'https://www.recipetineats.com/wp-content/uploads/2017/03/One-Pot-Chicken-Alfredo-2.jpg',
      title: 'Chicken Alfredo Pasta',
      origin: 'Italian',
      description: 'Creamy Alfredo sauce served with tender chicken and fettuccine pasta.',
      display: 'none',
      ingredients: [
        '8 oz (225g) fettuccine pasta',
        '2 boneless, skinless chicken breasts, cut into strips',
        '2 tablespoons butter',
        '2 cloves garlic, minced',
        '1 cup heavy cream',
        '1 cup grated Parmesan cheese',
        'Salt and pepper to taste'
      ],
      preparation:[
        '1- Cook the fettuccine pasta in a large pot of boiling salted water according to the package instructions until it s al dente. Drain and set aside.',
        '2- In a large skillet over medium-high heat, melt the butter.',
        '3- Add the minced garlic and sauté for about 1 minute until fragrant, but be careful not to let it brown.',
        '4- Add the chicken breast strips to the skillet and cook for about 4-5 minutes until they are no longer pink and have a nice golden color. Remove the cooked chicken from the skillet and set it aside.',
        '5- In the same skillet, pour in the heavy cream and bring it to a simmer. Reduce the heat and simmer for about 2-3 minutes until the cream slightly thickens.',
        '6- Add the grated Parmesan cheese to the cream and stir continuously until the cheese has melted and the sauce is smooth and creamy.',
        '7- Season the sauce with salt and pepper to taste. Adjust the seasoning as needed.',
        '8- Return the cooked chicken strips to the skillet and stir them into the Alfredo sauce to warm them through.',
        '9- Add the cooked fettuccine pasta to the skillet and toss everything together until the pasta is coated evenly with the creamy Alfredo sauce.',
        '10- Serve the Chicken Alfredo Pasta hot, garnished with additional grated Parmesan cheese and freshly ground black pepper if desired. Enjoy!'
      ]
    },
    {
      id: 5,
      imgsrc: 'https://img.cuisineaz.com/1024x768/2022/02/23/i183013-couscous-marocain.jpeg',
      title: 'Couscous',
      origin: 'Tunisian',
      description: 'A traditional North African dish made from steamed semolina grains.',
      display: 'none',
      ingredients: [
        '1 cup couscous',
        '1 cup boiling water',
        '1 tablespoon olive oil',
        '1 teaspoon salt',
        '1/2 cup raisins',
        '1/2 cup slivered almonds',
        '1/2 teaspoon ground cinnamon',
        '1/4 teaspoon cayenne pepper (optional)',
      ],
      preparation:[
        '1- Place the couscous in a large heatproof bowl.',
        '2- In a separate heatproof measuring cup or bowl, combine the boiling water, olive oil, salt, and optional cayenne pepper (if using). Stir to dissolve the salt and mix everything together.',
        '3- Pour the hot water mixture over the couscous in the bowl. Use a fork to fluff the couscous and ensure it s evenly moistened.',
        '4- Cover the bowl with a clean kitchen towel or plastic wrap and let it sit for about 5 minutes to allow the couscous to absorb the liquid and steam.',
        '5- After 5 minutes, remove the cover and fluff the couscous again with a fork to break up any clumps and make it light and fluffy.',
        '6- Stir in the raisins, slivered almonds, chickpeas, diced carrots, diced zucchini, diced bell pepper, diced onion, ground cumin, and ground cinnamon. Mix until all the ingredients are well combined.',
        '7- Taste the couscous and adjust the seasoning if needed by adding more salt or cayenne pepper to suit your preferences.',
        '8- Serve the Couscous hot or at room temperature, garnished with fresh cilantro leaves if desired. Enjoy!'
      ]
    },
    {
      id: 6,
      imgsrc: 'https://images.radio-canada.ca/v1/alimentation/recette/4x3/lasagne-25129.jpg',
      title: 'Lasagne',
      origin: 'Italian',
      description: 'Layers of pasta, meat sauce, and cheese baked to perfection.',
      display: 'none',
      ingredients: [
        '9 lasagna noodles',
        '1 lb (450g) ground beef',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 cup grated Parmesan cheese',
        '2 cups ricotta cheese',
        '2 tablespoons chopped fresh parsley'
      ],
      preparation:[
        '1- Preheat your oven to 375°F (190°C).',
        '2- Cook the lasagna noodles according to the package instructions until they are al dente. Drain and set aside.',
        '3- In a large skillet over medium heat, cook the ground beef and chopped onion until the beef is browned and the onion is translucent. Drain any excess fat.',
        '4- Stir in the minced garlic and cook for an additional 1-2 minutes until fragrant.',
        '5- Add the crushed tomatoes, tomato paste, canned tomato sauce, water, sugar, salt, dried basil leaves, fennel seeds, and black pepper to the skillet. Mix well and bring the sauce to a simmer. Allow it to simmer for about 10 minutes, stirring occasionally.',
        '6- In a separate bowl, combine the shredded mozzarella cheese, grated Parmesan cheese, and ricotta cheese. Mix until well blended.',
        '7- In a 9x13-inch (23x33 cm) baking dish, spread a small amount of the meat sauce to coat the bottom of the dish.',
        '8- Place a layer of cooked lasagna noodles over the sauce in the baking dish.',
        '9- Add a layer of the cheese mixture on top of the noodles.',
        '10- Repeat the layers: meat sauce, noodles, cheese mixture, until you ve used all the ingredients, finishing with a layer of meat sauce on top.',
        '11- Cover the baking dish with aluminum foil and bake in the preheated oven for 25 minutes.',
        '12- Remove the foil and continue baking for an additional 25 minutes or until the lasagna is bubbly and the cheese is golden and melted.',
        '13- Remove the lasagna from the oven and let it rest for a few minutes before serving.',
        '14- Garnish with chopped fresh parsley, if desired.',
      ]
    }
  ];
}
