import React from "react";

import mailIcon from "@/assets/icons/mail.svg";
import sendIcon from "@/assets/icons/send.svg";

import Button from "../Button";

import * as S from "./style";

const SubscribeEmail = ({ ...props }) => {
  return (
    <S.SubscribeEmail {...props}>
      <label htmlFor="formCheckEmail">
        <img src={mailIcon} alt="" />

        <input
          type="email"
          name="formCheckEmail"
          id="formCheckEmail"
          value=""
          onChange={() => {}}
          placeholder="email"
        />

        <div className="subscribeButton">
          <Button type="submit">
            <img src={sendIcon} alt="" />
          </Button>
        </div>
      </label>
    </S.SubscribeEmail>
  );
};

export default SubscribeEmail;
