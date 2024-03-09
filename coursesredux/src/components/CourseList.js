import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCard } from "../control/cardSlice";

//? store'daki initialState'e ulaşıp kursları listelemem lazım

function CourseList() {
  const dispatch = useDispatch();

  // useSelector yardımıyla store'daki bilgileri aldım
  const { cardItems, quantity, total } = useSelector((store) => store.card);

  return (
    <>
      {quantity < 1 ? (
        <section className="card">
          <header>
            <h2>SEPETİM</h2>
            <h4>BOMBOŞ</h4>
          </header>
        </section>
      ) : (
        <section className="card">
          <header>
            <h2>SEPETİM</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar : <span>{total} TL </span>
              </h4>
            </div>
            <button
              className="cardClearButton"
              onClick={() => dispatch(clearCard())}
            >
              TEMİZLE
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
