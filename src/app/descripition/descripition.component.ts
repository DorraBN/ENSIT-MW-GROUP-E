import { Component } from '@angular/core';

@Component({
  selector: 'app-descripition',
  templateUrl: './descripition.component.html',
  styleUrls: ['./descripition.component.css']
})
export class DescriptionComponent {
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
      Ingredients:[
        '8 oz (225g) spaghetti',
        '2 large eggs',
        '1 cup grated Pecorino Romano cheese',
        '4 oz (113g) pancetta or guanciale, diced',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste'
      ]
    },
    { 
      id:2,
      imgsrc:'https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg',
      title: 'Chicken Stir-Fry',
      origin: 'Chinese',
      description: 'A quick and delicious stir-fry with chicken and mixed vegetables.',
      display: 'none',
      Ingredients:[
        '1 lb (450g) boneless, skinless chicken breasts, sliced into strips',
        '2 cups mixed vegetables (bell peppers, broccoli, carrots, snow peas, etc.), chopped',
        '3 cloves garlic, minced',
        '2 tablespoons soy sauce',
        '1 tablespoon oyster sauce',
        '1 tablespoon sesame oil',
        '1 tablespoon vegetable oil',
        'Salt and pepper to taste'
      ]
    },
    {   
      id:3,
      imgsrc:'https://cuisinovores.com/wp-content/uploads/2023/05/photo_guacamole_facile_midjourney.jpg',
      title: 'Guacamole',
      origin: 'Mexican',
      description: 'A classic Mexican dip made with mashed avocados, tomatoes, onions, and lime juice.',
      display: 'none',
      Ingredients:[
        '8 oz (225g) spaghetti',
        '2 large eggs',
        '1 cup grated Pecorino Romano cheese',
        '4 oz (113g) pancetta or guanciale, diced',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste'
      ]
    },
    { 
      id:4,
      imgsrc:'https://www.recipetineats.com/wp-content/uploads/2017/03/One-Pot-Chicken-Alfredo-2.jpg',
      title: 'Chicken Alfredo Pasta',
      origin: 'Italian',
      description: 'Creamy Alfredo sauce served with tender chicken and fettuccine pasta.',
      display: 'none',
      Ingredients:[
        '8 oz (225g) spaghetti',
        '2 large eggs',
        '1 cup grated Pecorino Romano cheese',
        '4 oz (113g) pancetta or guanciale, diced',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste'
      ]
    },
    { 
      id:5,
      imgsrc:'https://img.cuisineaz.com/1024x768/2022/02/23/i183013-couscous-marocain.jpeg',
      title: 'Couscous',
      origin: 'Tunisian',
      description: 'A traditional North African dish made from steamed semolina grains.',
      display: 'none',
      Ingredients:[
        '8 oz (225g) spaghetti',
        '2 large eggs',
        '1 cup grated Pecorino Romano cheese',
        '4 oz (113g) pancetta or guanciale, diced',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste'
      ]
    },
    { 
      id:6,
      imgsrc:'https://images.radio-canada.ca/v1/alimentation/recette/4x3/lasagne-25129.jpg',
      title: 'Lasagne',
      origin: 'Italian',
      description: 'Layers of pasta, meat sauce, and cheese baked to perfection.',
      display: 'none',
      Ingredients:[
        '8 oz (225g) spaghetti',
        '2 large eggs',
        '1 cup grated Pecorino Romano cheese',
        '4 oz (113g) pancetta or guanciale, diced',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste'
      ]
    }
  ];
}
