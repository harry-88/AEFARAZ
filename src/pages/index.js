import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "@/components/common/Header";
import MainSlider from "@/components/main/Slider";
import { topLevelCategory } from "@/constant/data";
import { useState } from "react";
import { router } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/main/Main";
import PortfolioSlider from "@/components/Portfolio/PortfolioSlider";
import Contact from "@/components/Contact/Contact"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedCat, setSelectedCat] = useState("Residential");
  return (
    <>

      <Header />
      <Main />
      <PortfolioSlider />
      <Contact />

      {/* <div className="container p-4"> */}

      {/* <MainSlider /> */}


      {/* <div class="d-flex justify-content-center ">
          <div className="d-flex ">
          <p
            onClick={() => setSelectedCat("Residential")}
            className={`category-menu ${selectedCat == 'Residential'?'catSelected':''}`}
          >
            Residential
          </p>
          <p
            onClick={() => setSelectedCat("Commercial")}
            className={`category-menu ${selectedCat == 'Commercial'?'catSelected':''}`}
          >
            Commercial
          </p>
          </div>
        </div> */}

      {/* <div className="row">
          {topLevelCategory.map(
            (category, index) =>
              category.type == selectedCat && (
                <div onClick={() => router.push(selectedCat + "/" + category.name)} className="col-lg-3 col-md-6 col-sm-12 cat-body">
                  <img className="cat-img" src={category.img} />{" "}

                  <div className="cat-content">

                    <p className="cat-heading">{category.name}</p>
                  </div>
                </div>
              )
          )}
        </div> */}
      {/* </div> */}
    </>
  );
}
