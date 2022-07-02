import React from "react";

import * as S from "./style";

import switchHorizontalIcon from "@/assets/icons/switch-horizontal.svg";
import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import chevronRightIcon from "@/assets/icons/chevron-right.svg";
import alignLeftIcon from "@/assets/icons/align-left.svg";
import carIcon from "@/assets/icons/car.svg";

import RadioBtnsGroup from "@/components/RadioBtnsGroup";
import Breadcrumbs from "@/components/Breadcrumbs";
import CarCard from "@/components/CarCard";

const SectionFilteredCars = ({}) => {
  return (
    <S.SectionFilteredCars id="filteredCars">
      <div className="filteredCarsHeader">
        <div>
          <Breadcrumbs>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#" disabled>
                Carros usados
              </a>
            </li>
          </Breadcrumbs>
        </div>

        <div>
          <h1 id="catalogTitle">Carros</h1>

          <div className="option">
            <img src={carIcon} alt="" />
            <span id="qtdOffers">0 oferta(s)</span>
          </div>
        </div>

        <div className="filteredCarsOptions">
          <fieldset>
            <label htmlFor="formSortBy">
              <img src={alignLeftIcon} alt="" />
              Ordenar por:
            </label>
            <select name="formSortBy" id="formSortBy" onChange={() => {}}>
              <option value="maisnovo">Mais novo</option>
              <option value="maisantigo">Mais antigo</option>
            </select>

            <div className="btnCompare">
              <button>
                <img src={switchHorizontalIcon} alt="" />
                Comparar (0)
              </button>
            </div>
          </fieldset>

          <RadioBtnsGroup isIconBtn>
            <div>
              <input
                type="radio"
                id="formShowList"
                name="formStatus"
                checked
                onChange={() => {}}
              />
              <label htmlFor="formShowList">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00024 2.16691C2.54001 2.16691 2.16691 2.54001 2.16691 3.00024V4.66691C2.16691 5.12715 2.54001 5.50024 3.00024 5.50024H13.0002C13.4605 5.50024 13.8336 5.12715 13.8336 4.66691V3.00024C13.8336 2.54001 13.4605 2.16691 13.0002 2.16691H3.00024ZM0.500244 3.00024C0.500244 1.61953 1.61953 0.500244 3.00024 0.500244H13.0002C14.381 0.500244 15.5002 1.61953 15.5002 3.00024V4.66691C15.5002 6.04762 14.381 7.16691 13.0002 7.16691H3.00024C1.61953 7.16691 0.500244 6.04762 0.500244 4.66691V3.00024Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00024 10.5C2.54001 10.5 2.16691 10.8731 2.16691 11.3333V13C2.16691 13.4602 2.54001 13.8333 3.00024 13.8333H13.0002C13.4605 13.8333 13.8336 13.4602 13.8336 13V11.3333C13.8336 10.8731 13.4605 10.5 13.0002 10.5H3.00024ZM0.500244 11.3333C0.500244 9.95262 1.61953 8.83333 3.00024 8.83333H13.0002C14.381 8.83333 15.5002 9.95262 15.5002 11.3333V13C15.5002 14.3807 14.381 15.5 13.0002 15.5H3.00024C1.61953 15.5 0.500244 14.3807 0.500244 13V11.3333Z"
                    fill="white"
                  />
                </svg>
              </label>
            </div>
            <div>
              <input type="radio" id="formShowGrid" name="formStatus" />
              <label htmlFor="formShowGrid">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 2.16667C0.5 1.24619 1.24619 0.5 2.16667 0.5H5.5C6.42047 0.5 7.16667 1.24619 7.16667 2.16667V5.5C7.16667 6.42047 6.42047 7.16667 5.5 7.16667H2.16667C1.24619 7.16667 0.5 6.42047 0.5 5.5V2.16667ZM5.5 2.16667H2.16667V5.5H5.5V2.16667Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.83333 2.16667C8.83333 1.24619 9.57953 0.5 10.5 0.5H13.8333C14.7538 0.5 15.5 1.24619 15.5 2.16667V5.5C15.5 6.42047 14.7538 7.16667 13.8333 7.16667H10.5C9.57953 7.16667 8.83333 6.42047 8.83333 5.5V2.16667ZM13.8333 2.16667H10.5V5.5H13.8333V2.16667Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 10.5C0.5 9.57951 1.24619 8.83332 2.16667 8.83332H5.5C6.42047 8.83332 7.16667 9.57951 7.16667 10.5V13.8333C7.16667 14.7538 6.42047 15.5 5.5 15.5H2.16667C1.24619 15.5 0.5 14.7538 0.5 13.8333V10.5ZM5.5 10.5H2.16667V13.8333H5.5V10.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.83333 10.5C8.83333 9.57951 9.57953 8.83332 10.5 8.83332H13.8333C14.7538 8.83332 15.5 9.57951 15.5 10.5V13.8333C15.5 14.7538 14.7538 15.5 13.8333 15.5H10.5C9.57953 15.5 8.83333 14.7538 8.83333 13.8333V10.5ZM13.8333 10.5H10.5V13.8333H13.8333V10.5Z"
                    fill="white"
                  />
                </svg>
              </label>
            </div>
          </RadioBtnsGroup>
        </div>
      </div>

      <div className="filteredCarsGrid">
        <CarCard
          id="0"
          images={[
            "https://s3-alpha-sig.figma.com/img/c9ac/ff5c/9635646d17bdcac1476a1dd24fecbf73?Expires=1657497600&Signature=Ty0oD~a6rztK14XRg1rUt5QtHzEEpV4KLGTa1Mf0xI9GW5V-ZDGHYNsUQfeFpGO0aqBZydC3PZnoM13TsIgP54jsKqxaCslZVDZz8S0tBCd~OSmPPVNyvwmaRoo778tICfet3nWyaATHFYtAchgO0L2OAj1Fh~PrmFgiAdLpsPRh1ZjGq-yE0gpMKmc9B2x7vTJmBnRNqhDegSQcBBCgHcXp5HWoV~s2yziUfw61jeDdZa2DrJKcCt0shk9miTi-rBhdt9JjS7yY~AEQvjdIBURtjwcYE8bKgm0e0EbvpQd39C9nm9XprIHMqYc60j4AGDoeGL91g5Ij1-G35pFqGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            "https://s3-alpha-sig.figma.com/img/babd/0700/260f802928526e66d0051e351ce7df56?Expires=1657497600&Signature=b-pmrHf62AxicXfNjUbRQJUSG-jAHIQNbEqJEUHIqVywB778KD8ATLLcNFT9uul93egUdd66ZUToWv6YnJerY42pwebUh6eWbQrA-VuhatWpwxPmKUhP6hcC0weKbaS01~mm369wWi9cNT1b-3zjH0tZ-aYtXdj84hg1PJ7IF9vP0Uh3YwzQvYCfEVn6lZ3xFeh7Wnc7b85TqNhq9TPxdh2tF6pFvKIiZJZLWtaxlJEV82U0MAh672uKg9M9s7dcN47iFwj-Y7-tfxSjGMnxmJu5yw4ano3izeDSiOBTWiuBUbW6gUHzB4549fOwel9hw7YUZ5CO5Nz1CD5Z~X6qZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          ]}
          link="#"
          condition="Novo"
          year="2014"
          name="Mercedes Benz Convertible Coupe"
          price="$25,880"
          location="New York"
          mileage="48K Mi"
          transmission="Automatic"
          fuel="Petrol"
        />

        <CarCard
          id="1"
          images={[
            "https://s3-alpha-sig.figma.com/img/3a8e/f936/552d57c1529418094e0428986e3e76ee?Expires=1657497600&Signature=AY9j4QqWAXC2ik7eu3KyWuaQZZiV7hTk--caCXSe28XwuaTpOkh0mEyrhYFPubz24aXzrZI75IFGxgQ9RxCGOdW~LwMWgHNzRQYkczTZVF4fVNVsK1Lt3LU7jo7oOkemPTSUoK9CeQlEWSjN8zbTBrX3xZr2JAtj4SORW-F9h6y69oHbh5V-De6-yiJxTwv2xDAEC9AmYZkYB8zuV1A1ekekshQIY76gXtR6Y6lZduFcNJVoddVU6vR7vEXvL11qmFcvAPfzXi96AeyYY~CPyzjyicU0e7fts6pscnbqn-IqzDap12tNOHamt~PSz7fnR1Cwwh2fMf7KrSxiLAll0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          ]}
          link="#"
          condition="Novo"
          year="2014"
          name="Mercedes Benz Convertible Coupe"
          price="$25,880"
          location="New York"
          mileage="48K Mi"
          transmission="Automatic"
          fuel="Petrol"
        />
      </div>

      <div className="filteredCarsFooter">
        <div className="filteredCarsOptions">
          <fieldset>
            <label htmlFor="formSortBy">
              <img src={alignLeftIcon} alt="" />
              Ordenar por:
            </label>
            <select name="formSortBy" id="formSortBy" onChange={() => {}}>
              <option value="maisnovo">Mais novo</option>
              <option value="maisantigo">Mais antigo</option>
            </select>

            <div className="btnCompare">
              <button>
                <img src={switchHorizontalIcon} alt="" />
                Comparar (0)
              </button>
            </div>
          </fieldset>

          <ul className="pagination">
            <li>
              <button>
                <img src={chevronLeftIcon} alt="" />
              </button>
            </li>
            <li>
              <button className="active">
                <span>1</span>
              </button>
            </li>
            <li>
              <button>
                <span>2</span>
              </button>
            </li>
            <li>
              <button>
                <span>3</span>
              </button>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <button>
                <span>8</span>
              </button>
            </li>
            <li>
              <button>
                <img src={chevronRightIcon} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </S.SectionFilteredCars>
  );
};

export default SectionFilteredCars;
