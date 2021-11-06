/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_wishlist_users {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  users: MutationUpdateWishlist_updateWishlist_wishlist_users | null;
  games: MutationUpdateWishlist_updateWishlist_wishlist_games[];
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishlist_updateWishlist_wishlist | null;
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null;
}

export interface MutationUpdateWishlistVariables {
  input: updateWishlistPayload;
}
