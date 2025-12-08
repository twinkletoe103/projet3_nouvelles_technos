# Projet – Gestion d’une Bibliothèque  
**Technologies émergentes – Angular + API Laravel**

- **Angular** (frontend moderne en standalone components)
- **Laravel** (API REST en backend)

## Fonctionnalités prévues

### Côté API Laravel
- Gestion des livres :
  - Ajouter / Modifier / Supprimer un livre
  - Obtenir la liste complète
  - Filtrer par catégorie ou disponibilité
- Gestion des auteurs
- Gestion des catégories
- Gestion des utilisateurs
- Possibilité d’emprunt d’un livre

### Côté Angular
- Interface responsive permettant :
  - d’afficher la liste des livres
  - d’ajouter ou modifier un livre
  - d'afficher les détails d’un livre
  - de supprimer un livre
- Communication avec l’API via HttpClient
- Gestion des services, composants et routing

---

## Structure du projet

### Frontend – Angular (`angular-app`)
### Backend – Laravel (`api-laravel`)

## Commandes pour démarrer l'application
- Ouvrir deux terminals
- Dans le premier :
  - cd angular-app
  - ng serve
- Dans le deuxième :
  - cd api-Laravel
  - php artisan serve 
