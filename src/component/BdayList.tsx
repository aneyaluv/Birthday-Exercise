import React, { useState } from "react";

const BdayList: React.FC = () => {
   const [items, clear] = useState([
      {
         id: 1,
         text1: "Felix Cena Jr.",
         text2: "20",
         imageUrl: "./images/felix.jpg",
      },
      {
         id: 2,
         text1: "Czar Basanal",
         text2: "21",
         imageUrl: "./images/czar.jpg",
      },
      {
         id: 3,
         text1: "Vicente Belarmino",
         text2: "61",
         imageUrl: "./images/vicente.jpg",
      },
      {
         id: 4,
         text1: "Mariane Historia",
         text2: "22",
         imageUrl: "./images/mariane.jpg",
      },
      {
         id: 5,
         text1: "Emie Aguillon",
         text2: "46",
         imageUrl: "./images/emie.jpg",
      },
   ]);

   const clearItems = () => {
      clear([]);
   };

   return (
      <>
         <div className="grid">
            <ul className="list-group">
               <div className="list-container">
                  {items.map((item) => (
                     <li key={item.id} className="list-item">
                        <img src={item.imageUrl} alt="Item" />
                        <div className="item-info">
                           <p>{item.text1}</p>
                           <p>{item.text2}</p>
                        </div>
                     </li>
                  ))}
               </div>
               <div className="btn">
                  <button onClick={clearItems}>Clear All Items</button>
               </div>
            </ul>
         </div>
      </>
   );
};

export default BdayList;
