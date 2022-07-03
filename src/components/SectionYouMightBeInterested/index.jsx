import React from "react";

import * as S from "./style";

import SectionHeader from "@/components/SectionHeader";
import CarCard from "@/components/CarCard";
import SectionCarroussel from "@/components/SectionCarroussel";

const SectionYouMightBeInterested = ({}) => {
  return (
    <>
      <S.SectionYouMightBeInterested>
        <div className="container">
          <SectionHeader
            title="Você pode estar interessado"
            actionLabel="Ver todas"
            actionLink="/catalog"
            ariaLabel="Ir para página de ver todas as ofertas"
          />

          <SectionCarroussel>
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

            <CarCard
              id="2"
              images={[
                "https://s3-alpha-sig.figma.com/img/202d/ca92/519b404c76e6b3026e5481ab8b55b959?Expires=1657497600&Signature=B-wG5dHVz~6lgsMdGyIwIoibMe75Aia0h1NBNj8JHnzfeL1Ntug3KpCFvhaUebiPuhXqXMA74IlQfYwXgOA~XA8fHpR2D1eiezSgCm-iSj9A1DOVVlc-2qLUXeK5gDTfJTyrHv3UCgs5rYKL6hM13~Tj7p8VGqGC9OUDK6Nzn9qGDKktZU4KjrPDprPdjKIpgqIp~AheVeaEicKKvrg9mZOhRc7nFk9qX4gbaYywIa3LSpk53~kkavcNsYuOVlCETspmugRWUPP6jYPS8AGaHwPRUmxpr0lbdU9wtwiuWulqdI-VpdXNpxwNo1YhuqkamK6dGMSnlTAQxkCbUNunGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
              id="3"
              images={[
                "https://s3-alpha-sig.figma.com/img/1e7d/c3b6/f3bf97eb633e8ab18312f639bab53205?Expires=1657497600&Signature=HBThZ6uqPbkOBJc2SYXBmhIL0DUaCECsXofqCQxZg~pQTB1sETqLoANwN-zsZd67OLP-sGnmuOgaagTFAWI9ouMlb5hRAq-thfm1-Yy8Bde0REcUsx3wvkozIRSaqyFQ21Nf0j5reFIFSAa9nBLztjdVLBveqV-UeHRlbTuC5KlMj6XWiIeuM9xb17TcJPI~rS9v7LfVh-raXfyDfIFQXp825CA8NXN~7Pr2hy7FQ~XizBaYWevD7Brg~ojKTsCK1NgiLBDHaWlw7cj4CI5BLQAINlQ29t8mVM4Zv47BT5rtzNG5mUe-dgO1sf0pgdkW1fNCtPkhPzPUduqrmgaEjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
          </SectionCarroussel>
        </div>
      </S.SectionYouMightBeInterested>
    </>
  );
};

export default SectionYouMightBeInterested;
