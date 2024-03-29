import { ErrorPage } from "../../../pages/ErrorPage";
import { FormPage } from "../../../pages/FormPage";
import { BasketPage } from "../../../pages/BasketPage";
import { MainPage } from "../../../pages/MainPage";
import { UserPage } from "../../../pages/UserPage";
import { RegistrationPage } from "../../../pages/RegistrationPage";
import { ProductListPage } from "../../../pages/ProductListPage";
import { SelectedProductsPage } from "../../../pages/SelectedProductsPage";
import { InDeveloping } from "../../../pages/InDeveloping";
import { LoginPage } from "../../../pages/LoginPage";

export const routePath = {
  MAIN: "/*",
  USER: "userAccount",
  FAVORITES: "favorites",
  BASKET: "basket",
  FORM: "form",
  DEV: "inDeveloping",
  PRODUCT: "item/*",
  SIGNINUP: "signinUp",
  LOGIN: "login",
  ERROR: "error",
};

export const routeConfig = {
  MAIN: {
    path: "/*",
    element: <MainPage />,
    layout: true,
  },

  USER: {
    path: "userAccount",
    element: <UserPage />,
    layout: true,
  },

  FAVORITES: {
    path: "favorites",
    element: <SelectedProductsPage />,
    layout: true,
  },

  BASKET: {
    path: "basket",
    element: <BasketPage />,
    layout: true,
  },

  FORM: {
    path: "form",
    element: <FormPage />,
    layout: true,
  },

  DEV: {
    path: "inDeveloping",
    element: <InDeveloping />,
    layout: true,
  },

  PRODUCT: {
    path: "item/*",
    element: <ProductListPage />,
    layout: true,
  },

  SIGNINUP: {
    path: "signinUp",
    element: <RegistrationPage />,
    layout: false,
  },

  LOGIN: {
    path: "login",
    element: <LoginPage />,
    layout: false,
  },

  ERROR: {
    path: "error",
    element: <ErrorPage />,
    layout: false,
  },
};
