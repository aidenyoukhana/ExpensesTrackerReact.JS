import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense Item Evaluated By React!");

  // const clickHandler = () => {
  //   setTitle(props.title);
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={() => clickHandler()}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
