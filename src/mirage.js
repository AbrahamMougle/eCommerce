import { createServer, Model } from 'miragejs';

createServer({
  models: {
    vetement: Model,
  },

  seeds(server) {
    server.create('vetement', {
      id: 1,
      nom: 'Sac à main',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H6d47aaaa5100424abf6656f1176688acH.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'sac',
    });
    
    server.create('vetement', {
      id: 2,
      nom: 'Sac à main',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H8227a8a61bf948539ba87f38b83b60b17.jpg_64x64.jpg', // Chemin relatif
      description: 'Ces baskets légères et respirantes sont idéales pour les activités sportives. Elles offrent un excellent soutien et un style moderne qui vous accompagnera partout.',
      prix: 79.99,
      categorie: 'sac',
    });
    server.create('vetement', {
      id: 3,
      nom: 'Sac à main',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/He7d3f8ca22ac4cec8b99fd4b47858a1ez.jpg_64x64.jpg', // Chemin relatif
      description: 'Un élégant sac à main en cuir qui s’adapte à toutes les occasions. Son design chic et sa fonctionnalité en font un accessoire indispensable pour vos sorties.',
      prix: 89.99,
      categorie: 'sac',
    });
    server.create('vetement', {
      id: 4,
      nom: 'Sac à dos',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hf24afe798547432a905cb7f5a3e34a5db.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 5,
      nom: 'Sac à dos',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H6d47aaaa5100424abf6656f1176688acH.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'sac',
    });
    server.create('vetement', {
      id: 6,
      nom: 'Xump',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H062d6888b83f4d25b0179fe00725ded87.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id:7,
      nom: 'Sac à dos',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hc7b561fca644468190eeb3be5990ec938.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 8,
      nom: 'junp',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H94dc32fa408043f3a2d6b30c09edf892E.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 9,
      nom: 'joumg',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H6a07aead03884220accf61c229114ca5L.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 10,
      nom: 'Xyimg',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hc0f39d89e6874377ae09cf3f94b50b646.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'sac',
    });
    server.create('vetement', {
      id: 11,
      nom: 'Sac à dos',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hd2f8f5fa16df410d90cf3d843bad5aa0E.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'sac',
    });
    server.create('vetement', {
      id: 12,
      nom: 'yimp',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H866c50c85c6f460992ad398e5fc91e3fZ.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'sac',
    });
  },

  routes() {
    this.namespace = 'api';

    this.get("/vetements", (schema) => {
      return schema.vetements.all();
    });

    this.get("/vetements/:id", (schema, request) => {
      let id = request.params.id;
      return schema.vetements.find(id);
    });
    
   
  },
});