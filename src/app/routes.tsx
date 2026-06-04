import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { Vault } from "./pages/Vault";
import { SupplyCloset } from "./pages/SupplyCloset";
import { TownHall } from "./pages/TownHall";
import { TipDrop } from "./pages/TipDrop";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "vault", Component: Vault },
      { path: "shop", Component: SupplyCloset },
      { path: "townhall", Component: TownHall },
      { path: "tip", Component: TipDrop },
    ],
  },
]);
