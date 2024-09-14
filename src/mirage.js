import { createServer, Model } from 'miragejs';

createServer({
  models: {
    vetement: Model,
  },

  seeds(server) {
    server.create('vetement', {
      id: 1,
      nom: 'Montre Sportive en Acier Inoxydable',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Had6697cbd0e442a7a9d00fe10826cf8cV.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre sportive avec boîtier en acier inoxydable, mouvement à quartz et bracelet en silicone. Résistante à eau jusqu 100 mètres, parfaite pour les activités en plein air.',
      prix: 59.99,
      categorie: 'Montre',
    });

    server.create('vetement', {
      id: 2,
      nom: 'Montre de Luxe en Cuir',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H4995b44310af48d7b44addb3e6c95e21i.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre élégante avec un cadran en nacre et un bracelet en cuir véritable. Idéale pour les occasions formelles, avec une finition dorée raffinée.',
      prix: 59.99,
      categorie: 'Montre',
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
      nom: 'Ping-pop',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hf24afe798547432a905cb7f5a3e34a5db.jpg_64x64.jpg', // Chemin relatif
      description: 'Chaussures confortables et élégantes, parfaites pour toutes les occasions.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 5,
      nom: 'Sac à main',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H6d47aaaa5100424abf6656f1176688acH.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à main élégant et spacieux allie style moderne et fonctionnalité. Fabriqué en cuir doux, il est parfait pour toutes les occasions.',
      prix: 59.99,
      categorie: 'sac',
    });
    server.create('vetement', {
      id: 6,
      nom: 'Xump',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H062d6888b83f4d25b0179fe00725ded87.jpg_64x64.jpg', // Chemin relatif
      description: 'Chaussures tendance et légères, idéales pour un style décontracté au quotidien.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 7,
      nom: 'Pupop',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hc7b561fca644468190eeb3be5990ec938.jpg_64x64.jpg', // Chemin relatif
      description: 'Chaussures confortables et élégantes, parfaites pour toutes les occasions.',
      prix: 59.99,
      categorie: 'Basket',
    });
    server.create('vetement', {
      id: 8,
      nom: 'junp',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H94dc32fa408043f3a2d6b30c09edf892E.jpg_64x64.jpg',
      description: 'Chaussures confortables et élégantes, parfaites pour le quotidien et toutes vos tenues.',
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
      nom: 'Montre à Quartz Classique',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/He83b961525f44d8ebad7929eb0c0f755u.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre à quartz classique avec un cadran épuré et un bracelet en cuir. Un choix parfait pour un look professionnel et élégant.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 13,
      nom: 'Montre Militaire',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Heb20f08bcec7447ab1c020b197fa1a5fG.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre militaire robuste avec boîtier en plastique renforcé et bracelet en nylon. Résistante aux chocs et à l eau.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 14,
      nom: 'Montre à Affichage Numérique',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H620551941c0c47288bd3e6d8a8147028d.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre à affichage numérique avec rétroéclairage LED. Fonctionnalités de chronomètre et d alarme pour une utilisation pratique.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 15,
      nom: 'Sac de randonnée',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H866c50c85c6f460992ad398e5fc91e3fZ.jpg_64x64.jpg', // Chemin relatif
      description: 'sac au dos élégant et spacieux, alliant style raffiné et fonctionnalité. Parfait pour toutes vos occasions, il est fabriqué avec des matériaux durables.',
      prix: 59.99,
      categorie: 'Sac',
    });
    server.create('vetement', {
      id: 16,
      nom: 'Montre de Course',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hde5349cfe7f445319fb5be56f5bc55a6U.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre de course légère avec fonction de GPS et suivi de la distance. Conçue pour les athlètes et les passionnés de course.',
      prix: 59.99,
      categorie: 'Montre',
    });

    server.create('vetement', {
      id: 17,
      nom: 'Montre Smart avec Suivi de Santé',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H459ffd4849434c809f56c26262f80e65m.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre intelligente avec suivi de la santé, notifications et contrôle de la musique. Parfaite pour les sportifs et les amateurs de technologie.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 18,
      nom: 'Montre de Plongée Professionnelle',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H49eeb67888c14f70bf9f30648d987707z.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre de plongée avec lunette tournante et fonction chronomètre. Résistante à l eau jusqu à 300 mètres, conçue pour les plongeurs professionnels.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 19,
      nom: 'Montre Chronographe Sportive',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hca0de6a5545f49869294e1ec293efa89n.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre chronographe avec plusieurs sous-cadrans pour le chronométrage. Style dynamique avec un bracelet en acier inoxydable, idéale pour les passionnés de sport.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 20,
      nom: 'Montre Minimaliste en Bois',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H29ad73e745af4e65a94b8ba7c6752b7dh.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre en bois écologique avec un design minimaliste. Légère et confortable, parfaite pour un look décontracté et naturel.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 21,
      nom: 'Montre Étanche pour Enfants',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H7781bb1764914caf9278f1157f36e83ei.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre colorée et résistante à eau, spécialement conçue pour les enfants. Affichage numérique et fonctionnalités amusantes pour les petits aventuriers.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 22,
      nom: 'Sac au dos',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H866c50c85c6f460992ad398e5fc91e3fZ.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à dos est parfait pour les randonnées et les voyages. Il offre un grand espace de rangement et un confort exceptionnel pour transporter vos affaires.',
      prix: 59.99,
      categorie: 'Sac',
    });
    server.create('vetement', {
      id: 23,
      nom: 'Montre Connectée Multifonction',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/He3c77e95aef8473d886417b61ab9a062C.jpg_64x64.jpg', // Chemin relatif
      description: 'Montre connectée avec suivi de la fréquence cardiaque, notifications de smartphone et GPS intégré. Personnalisez votre cadran et suivez votre activité quotidienne.',
      prix: 59.99,
      categorie: 'Montre',
    });
    server.create('vetement', {
      id: 24,
      nom: 'Sac à main',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H8227a8a61bf948539ba87f38b83b60b17.jpg_64x64.jpg', // Chemin relatif
      description: 'Ce sac à main élégant et spacieux allie style moderne et fonctionnalité. Fabriqué en cuir doux, il est parfait pour toutes les occasions.',
      prix: 79.99,
      categorie: 'sac',
    });

  },

  routes() {
    this.namespace = 'api';
    this.timing = 1000
    this.logging=false

    this.get("/vetements", (schema,request) => {
     //return new Response( 404, {}, { error: 'Error fetch data' });
     return schema.vetements.all();
    });

    this.get("/vetements/:id", (schema, request) => {
      let id = request.params.id;
      return schema.vetements.find(id);
    });


  },
});