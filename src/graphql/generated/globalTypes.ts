/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = "left",
  right = "right",
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = "primary",
  secondary = "secondary",
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = "normal",
  small = "small",
}

export enum ENUM_GAME_RATING {
  BR_10 = "BR_10",
  BR_12 = "BR_12",
  BR_14 = "BR_14",
  BR_16 = "BR_16",
  BR_18 = "BR_18",
  Free = "Free",
  L = "L",
  esrb_m = "esrb_m",
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface WishlistInput {
  users?: string | null;
  games?: (string | null)[] | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface createWishlistInput {
  data?: WishlistInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
