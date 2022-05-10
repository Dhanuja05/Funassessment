import React, { useState } from "react";
import "./Category.css";
import multi1 from "./multi1.webp";
import brown1 from "./brown1.webp";
import glass1 from "./glass1.webp";
import belt1 from "./belt1.jpg";
import belt2 from "./belt2.webp";
import glass2 from "./glass2.webp";
import pink1 from "./pink1.jpg";
import blueshoe from "./blueshoe.webp";
import shoe3 from "./shoe3.webp";
import shoe4 from "./shoe4.webp";
import belts1 from "./belts1.webp";
import belts2 from "./belts2.webp";
import glass3 from "./glass3.webp";
import glass4 from "./glass4.webp";
import bags1 from "./bags1.jpg";
import bags2 from "./bags2.jpg";
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
function Category() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      img: multi1,
      title: "Nike Air Max 270 React",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sneakers",
    },
    {
      id: 2,
      img: brown1,
      title: "Women Brown Bag",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Bags",
    },
    {
      id: 3,
      img: glass1,
      title: "Branded Male glass",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sunglasses",
    },
    {
      id: 4,
      img: belt1,
      title: "Black Italian leather belt",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Belts",
    },
    {
      id: 5,
      img: belt2,
      title: "Women leather belt",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Belts",
    },
    {
      id: 6,
      img: glass2,
      title: "Rimless Butterfly Sunglass ",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sunglasses",
    },
    {
      id: 7,
      img: pink1,
      title: "Cartier Bags for women",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Bags",
    },
    {
      id: 8,
      img: blueshoe,
      title: "Nike Air Max 270 React",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sneakers",
    },
    {
      id: 9,
      img: shoe3,
      title: "Nike Air Max 270 React",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sneakers",
    },
    {
      id: 10,
      img: belts1,
      title: "Nike Air Max 270 React",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Belts",
    },
    {
      id: 11,
      img: glass3,
      title: "Nike Air Max 270 React",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sunglasses",
    },
    {
      id: 12,
      img: shoe4,
      title: "Nike Air Max 270 React",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sneakers",
    },
    {
      id: 13,
      img: belts2,
      title: "Branded Male Belts",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Belts",
    },
    {
      id: 14,
      img: bags1,
      title: "Branded Male glass",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Bags",
    },
    {
      id: 15,
      img: glass4,
      title: "Branded Male glass",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Sunglasses",
    },
    {
      id: 16,
      img: bags2,
      title: "Women Leather Bag",
      price: "$299,43",
      rate: "$534,33",
      offer: "24% Off",
      category: "Bags",
    },
  ]);
  const [Datanew, setDatanew] = useState(datas);
  const category = datas.map((data) => data.category);
  const uniquecategory = [...new Set(category)];
  uniquecategory.unshift("All");
  console.log(uniquecategory);
  const handleTab = (u) => {
    console.log(u);
    if (u === "All") {
      setDatanew(datas);
      return;
    }
    const filteredData = datas.filter((data) => data.category === u);
    setDatanew(filteredData);
  };  
  const[visible,setVisible]=useState(4)
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue+4)
  }
  return (
    <div>
      <center>
        <label className="mt-5 best">BEST SELLER</label>
      </center>
      <center>
        <div className="d-flex justify-content-evenly col-md-5 color ">
          {uniquecategory.map((u, i) => (
            <span
              key={i}
              onClick={() => handleTab(u)}
              className="color1 px-2 my-3"
            >
              {u}
            </span>
          ))}
        </div>
      </center>
      <div className="container">
        <div className="row">
          {Datanew.slice(0,visible).map((datas) => (
            <div className="col-3">
              <div className="row">
                <div className="d-flex justify-content-around mt-5">
                  <div className="card">
                    <div className="containers">
                      <img src={datas.img} width="100%" className="image9" />
                      <div className="middle">
                        <div className="text">
                            <div className=" d-flex justify-content-around"><AiOutlineHeart size='40'/>
                            <IoCartOutline size='40' className="ms-4
                            "/></div></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-title title1">
                        <center>{datas.title}</center>
                      </div>
                      <div className="card-text">
                        <div className="d-flex justify-content-center">
                          <IoMdStar color="#FFC600" />
                          <IoMdStar color="#FFC600" />
                          <IoMdStar color="#FFC600" />
                          <IoMdStar color="#FFC600" />
                          <IoMdStar color="#C1C8CE" />
                        </div>
                        <div className="d-flex">
                          <label className="ms-4 price1">{datas.price}</label>
                          <label className="ms-2 rate1 mt-1">
                            {datas.rate}
                          </label>
                          <label className="ms-2 offer1">{datas.offer}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
      <center><button onClick={showMoreItems} className='my-5 load'>LOAD MORE</button></center>
      
    </div>
  );
}

export default Category;
