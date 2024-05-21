import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from '../Modal/Modal';
import "./Card.css"

const Card = ({ text, value }) => {
  const [modalOn, setModalOn] = useState(false);
  const toggleModal = () => setModalOn(!modalOn);
  const isExpense = (text = "Expense");

  return (
    <div className="Card">
      <span className="cardText">
        <span>{text}:</span>
        <span className={text === "Expense" ? "cardTextRed" : "cardTextGreen"}>
          {" "}
          ₹{value}{" "}
        </span>
      </span>

      <Button
        text={isExpense ? "+ Add Expense" : "+Add Income"}
        background={isExpense ? "gradientRed" : "gradientGreen"}
        buttonSize="largeButton"
        clickFunction={toggleModal}
      />
      {modalOn && (
        <Modal
          toggleModal={toggleModal}
          text={isExpense ? "Add Expense" : "Add Balance "}
        />
      )}
    </div>
  );
};

export default Card;
