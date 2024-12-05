import './Main.css'
import React, { useState, useEffect } from 'react';


// Images

import ph1 from '../images/ph1.png'
import ph2 from '../images/ph2.png'
import ph3 from '../images/ph3.png'
import ph4 from '../images/ph4.png'



// Icons

import { RiGlobalLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineAlibaba } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { BsUiChecksGrid } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { PiPlantBold } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";
import { RiCupLine } from "react-icons/ri";
import { GiLipstick } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { PiBabyBold } from "react-icons/pi";
import { FaCarRear } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlineSportsCricket } from "react-icons/md";
import { TbEPassport } from "react-icons/tb";
import { MdOutlineDiamond } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";
import { MdOutlineFactory } from "react-icons/md";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


const people = [
    {
        name: "Eva Jane",
        image: "https://s.alicdn.com/@img/imgextra/i4/O1CN01XrvnBG1YDUxJ0l5Bh_!!6000000003025-2-tps-352-352.png_350x350.jpg",
        text: "Основатель Eva Jane Beauty",
        text2: "«Как предприниматель, глубоко вовлеченный в бьюти-индустрию, я была целиком поглощена созданием своих оригинальных продуктов. Alibaba.com стал моим надежным партнером в этом процессе»."
    },
    {
        name: "Dr. Sayed Ibrihim",
        image: "https://s.alicdn.com/@img/imgextra/i3/O1CN01wllRR11a9Uiq6syoP_!!6000000003287-2-tps-352-352.png_350x350.jpg",
        text: "Основатель SprinJene",
        text2: "«Как только я познакомился с Alibaba.com, я был поражен тем, сколько новых возможностей у меня открылось с поставщиками со всего мира»."
    },
    {
        name: "Рон Уильямс и Тоня Уильямс",
        image: "https://s.alicdn.com/@img/imgextra/i4/O1CN01cBGvqy1R9eJnhkpv5_!!6000000002069-2-tps-352-352.png_350x350.jpg",
        text: "Основатель и генеральный директор (соответственно) компании Ron Williams Fitness",
        text2: "«Для таких малых предприятий, как наше, Alibaba.com позволяет кардинально изменить ситуацию. Мы смогли найти именно ту продукцию, которая нам была нужна, и я не думаю, что нам удалось бы найти что-либо без Alibaba.com»."
    },
];


const categories = [
    { id: 1, title: "Окружающая среда", icon: <PiPlantBold /> },
    { id: 2, title: "Одежда", icon: <GiLargeDress /> },
    { id: 3, title: "Дом и сад", icon: <RiCupLine /> },
    { id: 4, title: "Красота", icon: <GiLipstick /> },
    { id: 5, title: "Печать и упаковка", icon: <BsBox /> },
    { id: 6, title: "Мать, Дети и Игрушки", icon: <PiBabyBold /> },
    { id: 7, title: "Автозапчасти", icon: <FaCarRear /> },
    { id: 8, title: "Приборы для измерений", icon: <FaRegStar /> },
    { id: 9, title: "Бытовая электроника", icon: <FaHeadphonesSimple /> },
    { id: 10, title: "Спорт и развлечения", icon: <MdOutlineSportsCricket /> },
    { id: 11, title: "Торговое оборудование", icon: <TbEPassport /> },
    { id: 12, title: "Часы и ювелирные изделия", icon: <MdOutlineDiamond /> },
    { id: 13, title: "Обувь и аксессуары", icon: <GiConverseShoe /> },
    { id: 14, title: "Промышленное оборудование", icon: <MdOutlineFactory /> },
];

const products = [
    { id: 1, image: ph1 },
    { id: 2, image: ph2 },
    { id: 3, image: ph3 },
    { id: 4, image: ph4 },
];


// text section


const items = [
    { text: "Найдите подходящего", icon: <MdSearch fontSize={'55px'} color='#7D5C55' />, image: "https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg" },
    { text: "Платите с уверенностью", icon: <MdOutlineVerified fontSize={'55px'} color='#7D5C55' />, image: "https://s.alicdn.com/@img/imgextra/i2/O1CN0168f1F61TkrjFojnmE_!!6000000002421-2-tps-1380-1060.png_q60.jpg" },
    { text: "Выполнение в условиях полной...", icon: <HiOutlineSwitchVertical fontSize={'55px'} color='#7D5C55' />, image: "https://s.alicdn.com/@img/imgextra/i1/O1CN01XW2muo1PFU87b4zQ5_!!6000000001811-2-tps-1380-1060.png_q60.jpg" },
    { text: "Управляйте с легкостью", icon: <AiOutlineGlobal fontSize={'55px'} color={'#7D5C55'} />, image: "https://s.alicdn.com/@img/imgextra/i2/O1CN01spEIDZ1TPnVsDakHo_!!6000000002375-2-tps-1380-1060.png_q60.jpg" },
];



const Main = () => {

    const [showPopup, setShowPopup] = useState(false);
    const handleMouseEnterp = () => setShowPopup(true);
    const handleMouseLeavep = () => setShowPopup(false);

    const [showPopupl, setShowPopupl] = useState(false);
    const handleMouseEnterl = () => setShowPopupl(true);
    const handleMouseLeavel = () => setShowPopupl(false);


    const [index, setIndex] = useState(0);

    const handleNextt = () => {
        setIndex((prevIndex) => (prevIndex + 1) % people.length);
    };

    const handlePrevv = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? people.length - 1 : prevIndex - 1
        );
    };


    // text section


    const [activeImage, setActiveImage] = useState(items[0].image);

    const handleMouseEnter2 = (image) => {
        setActiveImage(image);
    };




    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);






    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 14;


    const nextPage = () => {
        if (currentIndex + itemsPerPage < categories.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const prevPage = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };


    const currentItems = categories.slice(
        currentIndex,
        currentIndex + itemsPerPage
    );




    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const [isDropdownVisiblee, setDropdownVisiblee] = useState(false);

    const handleMouseEnterr = () => {
        setDropdownVisiblee(true);
    };

    const handleMouseLeavee = () => {
        setDropdownVisiblee(false);
    };




    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };



    const mainItems = [
        "https://s.alicdn.com/@sc04/kf/Hd4aecc3a176b4f99b014a835c2d61119U.png_720x720q50.jpg",
        "https://s.alicdn.com/@sc04/kf/H931862bc0dd84e66ab5a5e279b9ec3c8e.png_720x720q50.jpg",
        "https://s.alicdn.com/@sc04/kf/H5b5ccd944c014f2dbc1355510274efc8U.png_720x720q50.jpg",
        "https://s.alicdn.com/@sc04/kf/Hee8b148e2b3542798e168dc79beaadcaC.png_720x720q50.jpg",
    ];

    const weeklyHighlight = {
        image: "https://s.alicdn.com/@sc04/kf/Hf73b3d2528674af4bfab5048c817278az.jpg_720x720q50.jpg",
        title: "Новинки этой недели",
        description: "Товары только от проверенных поставщиков",
    };


    const lowestPriceProduct = {
        image: "https://s.alicdn.com/@sc04/kf/H4782688dfbff4bb997034ac7283b44322.jpg_720x720q50.jpg",
        description: "Самая низкая цена за 180 дней",
    };

    const featuredProduct = {
        image: "https://s.alicdn.com/@sc04/kf/H381eabf1060745a698be247a78769c1e6.jpg_720x720q50.jpg",
        title: "X9 PRO",
        specs: "Max speed 40KM/H, Max Range 100KM",
        discount: "Скидка 10%",
    };



    return (
        <div className="container">

            <div className="first-stage">
                {/* Navbar */}
                <div className={isSticky ? 'navbar sticky' : 'navbar'}>
                    <h1 className={isSticky ? 'logo sticky-logo' : 'logo'}>
                        <AiOutlineAlibaba style={{ fontSize: '45px' }} /> Alibaba.com
                    </h1>
                    {isSticky && (
                        <div className="search-stagee sticky-search">
                            <input type="search" placeholder="Search..." />
                            <MdOutlineLinkedCamera color='black' fontSize='20px' />
                            <button className="search">
                                <IoIosSearch /> Поиск
                            </button>
                        </div>
                    )}
                    <div className={isSticky ? 'menu sticky-menu' : 'menu'}>

                        <p
                            onMouseEnter={handleMouseEnterl} onMouseLeave={handleMouseLeavel}
                        >
                            <p>Доставка в:</p>
                        </p>

                        <p
                            onMouseEnter={handleMouseEnterp} onMouseLeave={handleMouseLeavep}
                        >
                            <p><RiGlobalLine /> Pусский-USD</p>
                        </p>

                        {showPopup && (
                            <div onMouseEnter={handleMouseEnterp} onMouseLeave={handleMouseLeavep}>
                                <LanguageCurrencyPopup />
                            </div>
                        )}

                        {showPopupl && (
                            <div onMouseEnter={handleMouseEnterl} onMouseLeave={handleMouseLeavel}>
                                <LanguageCurrencyPopupl />
                            </div>
                        )}
                        <p><FaRegUser /> Войти</p>
                        <button>Регистрация</button>
                    </div>

                </div>

                {/* Navbar List */}
                <div className="navbar-list">
                    <div className="navbar-list-1">
                        <div
                            className="categories-2"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>Все категории</span>
                            {isDropdownVisible && (
                                <div className="dropdown-menu">
                                    <div className="left-panel">
                                        <ul>
                                            <li>Декор для дома</li>
                                            <li>Индустриальный</li>
                                            <li>Здоровье и личная гигиена</li>
                                            <li>Мода и красота</li>
                                            <li>Спорт и развлечения</li>
                                            <li>Инструменты и обустройство дома</li>
                                            <li>Сырье</li>
                                            <li>Техническое обслуживание, ремонт и эксплуатация</li>
                                        </ul>
                                    </div>
                                    <div className="left-panel">
                                        <ul>
                                            <li>Декор для дома</li>
                                            <li>Индустриальный</li>
                                            <li>Здоровье и личная гигиена</li>
                                            <li>Мода и красота</li>
                                            <li>Спорт и развлечения</li>
                                            <li>Инструменты и обустройство дома</li>
                                            <li>Сырье</li>
                                            <li>Техническое обслуживание, ремонт и эксплуатация</li>
                                        </ul>
                                    </div>
                                    <div className="left-panel-2">
                                        <ul>
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="categories-3"
                            onMouseEnter={handleMouseEnterr}
                            onMouseLeave={handleMouseLeavee}
                        >
                            <span>Подборки рекомендуемых товаров</span>
                            {isDropdownVisiblee && (
                                <div className="dropdown-menu">
                                    <div className="left-panel">
                                        <ul>
                                            <li>Декор для дома</li>
                                            <li>Индустриальный</li>
                                            <li>Здоровье и личная гигиена</li>
                                            <li>Мода и красота</li>
                                            <li>Спорт и развлечения</li>
                                            <li>Инструменты и обустройство дома</li>
                                            <li>Сырье</li>
                                            <li>Техническое обслуживание, ремонт и эксплуатация</li>
                                        </ul>
                                    </div>
                                    <div className="left-panel">
                                        <ul>
                                            <li>Декор для дома</li>
                                            <li>Индустриальный</li>
                                            <li>Здоровье и личная гигиена</li>
                                            <li>Мода и красота</li>
                                            <li>Спорт и развлечения</li>
                                            <li>Инструменты и обустройство дома</li>
                                            <li>Сырье</li>
                                            <li>Техническое обслуживание, ремонт и эксплуатация</li>
                                        </ul>
                                    </div>
                                    <div className="left-panel-2">
                                        <ul>
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                            <img src="https://s.alicdn.com/@sc04/kf/H3d8a1c45898c43589614b4a83a453ca02.jpg_300x300.jpg" alt="" />
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p>Trade Assurance</p>
                    </div>
                    <div className="navbar-list-2">
                        <p>Центр покупателей</p>
                        <p>Справочный центр</p>
                        <p>Скачать приложение</p>
                        <p>Стать поставщиком</p>
                    </div>
                </div>

                {/* Main Face */}
                <div className="main-face">
                    <span>Подробнее об Alibaba.com</span>
                    <h1>
                        Ведущая платформа электронной B2B- <br /> коммерции для мировой торговли
                    </h1>
                    <div className="search-stage">
                        <input type="search" placeholder="" />
                        <button className="search">
                            <IoIosSearch /> Поиск
                        </button>
                    </div>
                    <div className="face-menu">
                        <p>Часто ищут:</p>
                        <button>наушники</button>
                        <button>детская одежда</button>
                        <button>женская одежда</button>
                        <button>ноутбук</button>
                    </div>
                </div>
            </div>

            {/* Stage 2 */}


            <div className="Cards">
                <div className="card-1">
                    <BsUiChecksGrid style={{ display: 'flex', color: '#B7AFAC', width: '50px', height: '30px', }} />
                    <h2>Миллионы бизнес-предложений</h2>
                    <p>Выбирайте нужных поставщиков и товары для своего бизнеса из миллионов предложений со всего мира.</p>
                </div>
                <div className="card-1">
                    <AiOutlineSafetyCertificate style={{ display: 'flex', color: '#B7AFAC', width: '40px', height: '40px', }} />
                    <h2>Гарантированное качество и надежность транзакций</h2>
                    <p>Для уверенности в качестве товара заказывайте у проверенных поставщиков с защитой своих заказов от оплаты до доставки.</p>
                </div>
                <div className="card-1">
                    <BsBoxSeam style={{ display: 'flex', color: '#B7AFAC', width: '50px', height: '30px', }} />
                    <h2>Комплексное торговое решение</h2>
                    <p>Заказывайте без проблем: от поиска товара/поставщика до управления заказами, оплаты и контроля выполнения.</p>
                </div>
                <div className="card-1">
                    <RiCheckboxMultipleBlankLine style={{ display: 'flex', color: '#B7AFAC', width: '50px', height: '30px', }} />
                    <h2>Торговля с учетом индивидуальных особенностей</h2>
                    <p>Получите такие особые преимущества, как эксклюзивные скидки, расширенная защита и дополнительная поддержка. Это поможет вам развивать свой бизнес на каждом этапе сотрудничества.</p>
                </div>
            </div>


            {/* Stage 3 */}


            <div className="stage-3">
                <div className="s-1">
                    <h1>Ознакомьтесь с миллионами <br /> предложений, способных <br /> удовлетворить индивидуальны...</h1>
                    <div className="s-about">
                        <div className="about-1">
                            <div className="about-line"></div>
                            <div className="about-p">
                                <span>Более 200 <br /> млн</span>
                                <p>товары</p>
                            </div>
                        </div>
                        <div className="about-1">
                            <div className="about-line2"></div>
                            <div className="about-p">
                                <span>5900</span>
                                <p>категории товаров</p>
                            </div>
                        </div>
                    </div>
                    <div className="s-about">
                        <div className="about-1">
                            <div className="about-line"></div>
                            <div className="about-p">
                                <span>Более 200 <br /> 000</span>
                                <p>поставщики</p>
                            </div>
                        </div>
                        <div className="about-1">
                            <div className="about-line2"></div>
                            <div className="about-p">
                                <span>200+</span>
                                <p>страны и регионы</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>






            <div className="slider-container">
                <button className="nav-button left" onClick={prevPage} disabled={currentIndex === 0}>
                    ◀
                </button>

                <div className="categories">
                    {/* 1-Qator: 7 ta karta */}
                    <div className="row">
                        {currentItems.slice(0, 7).map((item) => (
                            <div className="category-card" key={item.id}>
                                <div className="icon">{item.icon}</div>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* 2-Qator: 7 ta karta */}
                    <div className="row">
                        {currentItems.slice(7, 14).map((item) => (
                            <div className="category-card" key={item.id}>
                                <div className="icon">{item.icon}</div>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="nav-button right"
                    onClick={nextPage}
                    disabled={currentIndex + itemsPerPage >= categories.length}
                >
                    ▶
                </button>
            </div>




            {/* Stage 4 */}




            <div className="stage-4">
                <h1>Откройте для себя очередную бизнес-возможность</h1>
                <div className="ads">
                    <div className="ads-cards">
                        <div className="a-card-text">
                            <p>Лидеры рейтинга</p>
                            <p>Больше</p>
                        </div>
                        <div className="cardd">
                            <div className="image-container">
                                <img src={products[currentIndex].image} alt="Product" />
                            </div>
                            <div className="slider-button">
                                <button onClick={handlePrev}>←</button>
                                <button onClick={handleNext}>→</button>
                            </div>

                        </div>
                    </div>

                    <div className="ads-card2">
                        <div className="new-arrivals">
                            <div className="header">
                                <h2>Новые поступления</h2>
                                <a href="#">Больше</a>
                            </div>

                            <div className="content">
                                <p>125,000+ товаров, добавленные сегодня</p>
                                <div className="grid">
                                    {mainItems.map((item, index) => (
                                        <img key={index} src={item} alt={`New Arrival ${index + 1}`} />
                                    ))}
                                </div>

                                <div className="highlight">
                                    <img src={weeklyHighlight.image} alt="Weekly Highlight" />
                                    <div>
                                        <h3>{weeklyHighlight.title}</h3>
                                        <p>{weeklyHighlight.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="highlighted-products">
                        <div className="section2">
                            <div className="header2">
                                <h2>В центре внимания — экономия</h2>
                                <a href="#">Больше</a>
                            </div>
                            <div className="product-card2">
                                <img src={lowestPriceProduct.image} alt="Lowest Price Product" />
                                <p>{lowestPriceProduct.description}</p>
                            </div>
                        </div>

                        <div className="section2">
                            <h2>Предложения на лидеры продаж</h2>
                            <div className="featured-product">
                                <div className="discount-badge">{featuredProduct.discount}</div>
                                <img src={featuredProduct.image} alt="Featured Product" />
                                <div className="info">
                                    <h3>{featuredProduct.title}</h3>
                                    <p>{featuredProduct.specs}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* Stage 5 */}



            <div className="stage-5">
                <h1>Покупайте напрямую у производителя</h1>
                <div className="stage-in">
                    <div className="stage-vd">
                        <div className="stage-vd-v">
                            <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN017KJkv81ec7twePq1p_!!6000000003891-1-tps-48-48.gif'} alt="" />
                            <p>Совершайте экскурсии по <br /> фабрикам в прямом эфире</p>
                        </div>
                        <img src={'//s.alicdn.com/@img/imgextra/i3/O1CN01blSupV1NpY5ZcwvIj_!!6000000001619-2-tps-920-920.png'} alt="" />
                        <div className="stage-vd-v-2">
                            <p>Смотреть LIVE</p>
                        </div>
                    </div>
                    <div className="stage-vd">
                        <div className="stage-vd-v">
                            <p>Получить образцы</p>
                        </div>
                        <img src={'//s.alicdn.com/@img/imgextra/i1/O1CN01Lcuxd21Gs6zkRBFHe_!!6000000000677-2-tps-920-920.png'} alt="" />
                        <div className="stage-vd-v-2">
                            <p>Больше</p>
                        </div>
                    </div>
                    <div className="stage-vd">
                        <div className="stage-vd-v">
                            <p>Установите контакт с <br /> ведущими производителями</p>
                        </div>
                        <img src={'//s.alicdn.com/@img/imgextra/i1/O1CN01twP5Jv1tjCIiCOQAv_!!6000000005937-2-tps-920-920.png'} alt="" />
                        <div className="stage-vd-v-2">
                            <p>Больше</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Stage 6 */}



            <div className="stage-6">
                <h1>Смело покупайте с гарантией <br /> качества товара и защитой покупки</h1>
                <div className="stage-6-cards">
                    <div className="card-6">
                        <p>Обеспечьте качество продукции с помощью</p>
                        <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png_q60.jpg" alt="" />
                        <p style={{ fontSize: '16px', fontWeight: '400' }}>Общайтесь с различными поставщиками, квалификация и возможности которых подтверждены сторонними организациями. Ищите знак «Verified», чтобы начать покупать у опытных поставщиков, на которых ваш бизнес...</p>
                        <div className="card-6-buttons">
                            <button>Смотреть видео</button>
                            <p>Подробнее</p>
                        </div>
                    </div>

                    <div className="card-6">
                        <p>Защитите свою покупку с помощью</p>
                        <img src="https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png_q60.jpg" alt="" />
                        <p style={{ fontSize: '16px', fontWeight: '400' }}>Покупайте уверенно с доступом к безопасным способам оплаты, с защитой от проблем с товаром или доставкой, а также с поддержкой в спорных ситуациях при возникновении любых проблем, связанных с покупкой. Всё...</p>
                        <div className="card-6-buttons">
                            <button>Смотреть видео</button>
                            <p>Подробнее</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* stage 7 */}



            <div className="stage-7">
                <h1>Оптимизируйте заказ от поиска до <br /> исполнения — всё в одном месте</h1>
                <div className="stage-7-v">
                    <div className="text-section">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="hover-item"
                                onMouseEnter={() => handleMouseEnter(item.image)}
                            >
                                {item.icon}
                                <p className="hover-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="image-section">
                        <img src={activeImage} alt="Active" className="active-image" />
                    </div>
                </div>
            </div>




            {/* Stage 8 */}



            <div className="stage-8">
                <div className="stage-8-title">
                    <h1>Воспользуйтесь индивидуальными скидками, услугами и инструментами для бизнеса вашего уровня.</h1>
                    <p>Развивайте свой бизнес благодаря особым преимуществам, которые предлагает бесплатная программа для участников Alibaba.com. При этом вы можете быть представителем малого бизнеса, который ищет всё необходимое для начала закупок, или сотрудником солидной компании, которой требуются инструменты и решения для более сложных заказов.</p>
                    <span>Подробнее</span>
                </div>

                <div className="carousel">
                    <button onClick={handlePrevv} className="prev-button">
                        <IoIosArrowBack color='black' fontSize='30px' />
                    </button>
                    <div className="carousel-content">
                        <img src={people[index].image} alt={people[index].name} />
                        <div className="c-content">
                            <h2>{people[index].name}</h2>
                            <p style={{ width: '200px' }}>{people[index].text}</p>
                        </div>
                        <p style={{ width: '400px', fontSize: '22px', color: 'black', fontFamily: '"Roboto", sans-serif', fontWeight: '600', }}>{people[index].text2}</p>
                    </div>
                    <button onClick={handleNextt} className="next-button">
                        <IoIosArrowForward color='black' fontSize='30px' />
                    </button>
                </div>
            </div>




            {/* Stage 9 */}




            <div className="stage-9">
                <h1>Готовы начать?</h1>
                <p>Выбирайте из миллионов товаров от надежных поставщиков, зарегистрировавшись сегодня!</p>
                <button>Регистрация</button>
            </div>




            {/* Stage 10 */}




            <div className="stage-10">
                <div className="st10-text">
                    <h1>Расширение возможностей бизнеса <br /> благодаря глобальной торговле</h1>
                    <p>Alibaba.com предлагает универсальные решения в сфере B2B-торговли для глобального малого и <br /> среднего бизнеса, помогая таким компаниям развиваться за счет цифровой торговли, используя <br /> все имеющиеся возможности, и более интенсивно расти на международном уровне.</p>
                </div>
                <div className="st10-div">
                    <div className="st10-div1">
                        <p>НАША МИССИЯ</p>
                        <h1>Ведите бизнес без лишних усилий в любом месте.</h1>
                    </div>
                    <div className="st10-div2">
                        <div className="st10-div3">
                            <div className="st10-div3-text">
                                <p>НАШИ ПОДРАЗДЕЛЕНИЯ</p>
                                <h1>У нас есть команды <br /> специалистов по</h1>
                            </div>
                        </div>
                        <div className="st10-div4">
                            <p>НАШИ ОБЯЗАТЕЛЬСТВА В ОБЛАСТИ ЭКОЛОГИЧЕСКОГО, СОЦИАЛЬНОГО И КОРПОРАТИВНОГО УПРАВЛЕНИЯ</p>
                            <h1>Экологически ответственная технология. Экологически</h1>
                        </div>
                    </div>
                </div>

                <div className="st10-end">
                    <div className="st10-end-text">
                        <h1>Поиск поставщиков по стране или региону</h1>
                        <p>Больше <FaArrowRight /></p>
                    </div>
                    <div className="flags">
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'https://s.alicdn.com/@img/tfs/TB1aUq6cgoQMeJjy0FoXXcShVXa-48-48.png'} alt="" />
                            </div>
                            <p>Япония</p>
                        </div>
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'https://s.alicdn.com/@img/tfs/TB1U8_xAeH2gK0jSZJnXXaT1FXa-268-179.jpg'} alt="" />
                            </div>
                            <p>Италия</p>
                        </div>
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'	https://s.alicdn.com/@img/tps/TB1QwGEPFXXXXXUaXXXXXXXXXXX-48-48.png'} alt="" />
                            </div>
                            <p>Турция</p>
                        </div>
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'https://s.alicdn.com/@img/tps/TB1tQC4PFXXXXaOXpXXXXXXXXXX-48-48.png'} alt="" />
                            </div>
                            <p>Малайзия</p>
                        </div>
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'https://s.alicdn.com/@img/tps/TB1WVfXPFXXXXXvXpXXXXXXXXXX-48-48.png'} alt="" />
                            </div>
                            <p>Южная Корея</p>
                        </div>
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'	https://s.alicdn.com/@img/tps/TB1fky3PFXXXXcuXpXXXXXXXXXX-48-48.png'} alt="" />
                            </div>
                            <p>Вьетнам</p>
                        </div>
                        <div className="flag-1">
                            <div className="flag-img">
                                <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01Sbi1Tm28po6huT3zL_!!6000000007982-2-tps-48-48.png'} alt="" />
                            </div>
                            <p>Россия</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Footer section */}



            <div className="footer-section">
                <div className="footer-text">
                    <div className="footer-text-1">
                        <span>Получайте поддержку</span>
                        <p>Справочный центр</p>
                        <p>Живой чат</p>
                        <p>Проверьте статус заказа</p>
                        <p>Возврат средств</p>
                        <p>Сообщить о нарушении</p>
                    </div>
                    <div className="footer-text-1">
                        <span>Оплата и защита</span>
                        <p>Безопасная и простая <br /> оплата</p>
                        <p>Alibaba.com Business Edge <br /> Credit Card</p>
                        <p>Политика возврата средств</p>
                        <p>Своевременная отправка</p>
                        <p>Послепродажная защита</p>
                        <p>Службы мониторинга <br /> товаров</p>
                    </div>
                    <div className="footer-text-1">
                        <span>Искать поставщиков на <br /> Alibaba.com</span>
                        <p>Запрос коммерческого <br /> предложения</p>
                        <p>Программа для участников</p>
                        <p>Логистика Alibaba.com</p>
                        <p>Налог с продаж и НДС</p>
                        <p>Alibaba.com Reads</p>
                    </div>
                    <div className="footer-text-1">
                        <span>Получайте поддержку</span>
                        <p>Справочный центр</p>
                        <p>Живой чат</p>
                        <p>Проверьте статус заказа</p>
                        <p>Возврат средств</p>
                        <p>Сообщить о нарушении</p>
                    </div>
                    <div className="footer-text-1">
                        <span>Получайте поддержку</span>
                        <p>Справочный центр</p>
                        <p>Живой чат</p>
                        <p>Проверьте статус заказа</p>
                        <p>Возврат средств</p>
                        <p>Сообщить о нарушении</p>
                    </div>
                </div>

                <div className="pay-imgs">
                    <div className="i">
                        <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN01L00bAM1TmF3L42KkI_!!6000000002424-2-tps-286-80.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN013pymTh1OIrZGMQ6iO_!!6000000001683-2-tps-93-80.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01CoqZOX1E5uCoNiJIr_!!6000000000301-2-tps-75-80.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01xBSIuv1ReKzDOHrTb_!!6000000002136-2-tps-214-80.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN01ba6iSo1PHJqZo1Gba_!!6000000001815-2-tps-81-80.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01dsw9V61Lbh0D1f9JG_!!6000000001318-2-tps-205-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01sXbha020agNJcLC4l_!!6000000006866-2-tps-148-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN01F2dH281hwEJACdKgv_!!6000000004341-2-tps-113-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN017IIzE71MpGLv2nxMd_!!6000000001483-2-tps-260-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN01pwSjDv25t4M1W8Xu8_!!6000000007583-2-tps-165-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01IxKcyY1rBeBQ8Yn01_!!6000000005593-2-tps-263-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01lX0cCy1PTgXZw0XZK_!!6000000001842-2-tps-324-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01Wv6lOf1OTOfx5Dppk_!!6000000001706-2-tps-171-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01yLWgha1BtsZXZDDih_!!6000000000004-2-tps-158-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01EXUFiW1EgXt8o8Ev9_!!6000000000381-2-tps-125-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01tkTNhl1ZaEMHoGWsA_!!6000000003210-2-tps-137-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN010I5eGr1aDcQ82EcRH_!!6000000003296-2-tps-169-112.png'} alt="" />
                        <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN01EF6Zjm21spgURRwKI_!!6000000007041-2-tps-138-112.png'} alt="" />
                    </div>

                    <div className="social-section">
                        <div className="social-icons">
                            <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01s7Kv0o1f2EXBWZFH3_!!6000000003948-2-tps-84-84.png'} alt="" />
                            <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01pokjTE1pWawtK9vr1_!!6000000005368-2-tps-84-84.png'} alt="" />
                            <img src={'https://s.alicdn.com/@img/imgextra/i1/O1CN01BdrubJ21eAtYdzBJF_!!6000000007009-2-tps-84-84.png'} alt="" />
                            <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01FX2glN20tSUpYMinl_!!6000000006907-2-tps-84-84.png'} alt="" />
                            <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01dPyTY31vW2A2bd0uC_!!6000000006179-2-tps-84-84.png'} alt="" />
                            <img src={'https://s.alicdn.com/@img/imgextra/i3/O1CN01JzRJnr28MxJY1e18t_!!6000000007919-2-tps-84-84.png'} alt="" />
                        </div>
                        <div className="social-icons2">
                            <p>Торгуйте на ходу с приложением Alibaba.com</p>
                            <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png'} alt="" />
                            <img src={'https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="end-section">
                <div className="section-1">
                    <p>AliExpress</p>
                    <p>1688.com</p>
                    <p>Tmall Taobao World</p>
                    <p>Alipay</p>
                    <p>Lazada</p>
                    <p>Taobao Global</p>
                </div>
                <div className="section-2">
                    <p>Политика и правила</p>
                    <p>Официальное уведомление</p>
                    <p>Политика выставления товара на продажу</p>
                    <p>Защита интеллектуальной собственности</p>
                    <p>Политика конфиденциальности</p>
                    <p>Условия использования</p>
                    <p>Ответственность принципов</p>
                </div>
                <div className="section-3">
                    <p>© 1999-2024 Alibaba.com。版权所有：杭州阿里巴巴海外信息技术有限公司 浙公网安备33010002000366 浙ICP备2024067534号-3</p>
                </div>
            </div>


        </div>
    )
}

function LanguageCurrencyPopup() {
    return (
        <div className="popup">
            <h3>Выбор языка и валюты</h3>
            <p>Выберите предпочтительный язык и валюту. Вы можете изменить настройки в любое время.</p>
            <div>
                <label>Язык</label>
                <select>
                    <option>Русский</option>
                    <option>English</option>
                    <option>Español</option>
                  
                </select>
            </div>
            <div>
                <label>Валюта</label>
                <select>
                    <option>USD - Доллар США</option>
                    <option>EUR - Евро</option>
                    <option>RUB - Российский рубль</option>
                   
                </select>
            </div>
            <button>Сохранить</button>
        </div>
    );
}


function LanguageCurrencyPopupl() {
    return (
        <div className="popup2">
            <h3>Укажите свое местонахождение</h3>
            <p>Варианты доставки и тарифы варьируются в зависимости от вашего местонахождения</p>
            <button>Войдите, чтобы добавить адрес</button>
            <div>
                <label>Валюта</label>
                <select>
                    <option>Meksika</option>
                    <option>Rossiya</option>
                    <option>Kanada</option>
                    <option>Germaniya</option>
                    <option>Avstraliya</option>
                    <option>Fransiya</option>
                    <option>Italiya</option>
                    <option>Ispaniya</option>
                    <option>Irlandiya</option>
                </select>
            </div>
            <button>Сохранить</button>
        </div>
    );
}


export default Main;