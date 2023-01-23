import React from "react";
import "./Contacts.css";

const Contacts: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="contacts">
        <div className="contacts__title">Про нас</div>
        <div className="contacts__description">
          «Кіноманія» — кінодистриб'юторська компанія, що вже багато років
          займається прокатом фільмів студії Warner Bros. Pictures в Україні.
          Стрімкий розвиток та ріст компанії надав можливість додати до свого
          репертуару стрічки незалежних студій (з 2017 року) та фільмів
          українського виробництва (з 2019 року). Починаючи з жовтня 2019 року
          «Кіноманія» стала офіційним дистриб'ютором фільмів студії Disney в
          Україні. Наша досвідчена та професійна команда показує максимальні
          результати у всіх напрямках роботи.
          <div>
            Також «Кіноманія» є членом Американської торговельної палати.
          </div>
        </div>
        <b className="contacts__info">Зв'язатися з нами:</b>
        <div className="contacts__info">
          <b>ПОШТОВА АДРЕСА:</b>
          01042, м. Київ, вул. Іоанна Павла ІІ, буд. 4/6, корпус «А», кімн. 821
        </div>
        <div className="contacts__info">
          <b>ТЕЛЕФОН:</b>
          +38 (044) 200-01-22
        </div>
        <div className="contacts__info">
          <p>
            З питань маркетингової співпраці: Анна Істоміна{" "}
            <b>anna.istomina@kinomania.com.ua</b>
          </p>
          <p>
            З питань зв'язків з медіа: Анна Бойко{" "}
            <b>anna.boiko@kinomania.com.ua</b>
          </p>
          <p>
            З питань діджитал та соц. медіа: Валерій Перевознюк{" "}
            <b>valera.perevoznyuk@kinomania.com.ua</b>
          </p>
          <p>
            З питань прокату кіно: Надія Купріненко{" "}
            <b>nadiya.kuprinenko@kinomania.com.ua</b>
          </p>
        </div>
        <div className="contacts__info">
          <div>
            <b>Код ЄДРПОУ </b>32208748
          </div>
          <div>
            <b>Рахунок IBAN </b>UA833510050000026008364029900 в АТ «УКРСИББАНК»
          </div>
          <div>
            <b>Рахунок IBAN </b>UA523005280000026005455018547 в АТ «ОТП БАНК»
          </div>
          <div>
            <b>МФО </b>351005
          </div>
          <div>
            <b>ПН № </b>32208748
          </div>
          <div>
            <b>СП ПДВ № № </b>200024567 від 07.02.2012
          </div>
        </div>
        <a
          className="contacts__info-link"
          href="ftp://ftp.kinomania.com.ua/Cinema/Documents/ugoda_pro_vyznannya_dokumentiv_v_elektronniy_formi.pdf"
        >
          Угода про визнання документів в електронній формі
        </a>
      </div>
    </div>
  );
};

export { Contacts };
