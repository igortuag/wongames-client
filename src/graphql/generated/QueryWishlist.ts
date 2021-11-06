/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryWishlist_wishlist_games_cover | null;
  developers: QueryWishlist_wishlist_games_developers[];
  price: number;
}

export interface QueryWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: QueryWishlist_wishlist_games[];
}

export interface QueryWishlist {
  wishlist: QueryWishlist_wishlist | null;
}
