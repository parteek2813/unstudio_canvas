import type { NextPage } from "next";

import Home from "@/modules/home/components/Home";
import CombinedComponent from "@/modules/room/components/Room";

const HomePage: NextPage = () => {
  return <CombinedComponent />;
};

export default HomePage;
