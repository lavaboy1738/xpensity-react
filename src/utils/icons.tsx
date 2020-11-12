import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import {faTaxi, faHome, faPlus, faDollarSign, faBook, faList, faChartBar, faChevronLeft, faBus, faTools
, faPaw, faBaby, faEllipsisH, faRunning, faMoneyCheckAlt, faTooth, faCapsules, faFirstAid,
faShoppingCart, faUtensils, faHamburger, faWineGlassAlt, faTshirt, faGamepad, faFilm, faTicketAlt, faPlane,
 faDog,
 faPiggyBank,
 faGift,
 faMoneyCheck,
 faCreditCard,
 faDonate} from "@fortawesome/free-solid-svg-icons";

const initTags = () => {
    library.add(faTaxi, faHome, faPlus, faDollarSign, faBook, faList, faChartBar, faChevronLeft, 
        faBus, faTools
, faPaw, faBaby, faEllipsisH, faRunning, faMoneyCheckAlt, faTooth, faCapsules, faFirstAid,
faShoppingCart, faUtensils, faHamburger, faWineGlassAlt, faTshirt, faGamepad, faFilm, faTicketAlt, faPlane, 
faDog, faPiggyBank, faGift, faMoneyCheck, faCreditCard, faDonate)}

const totalTags: IconProp[] = ["ellipsis-h", "hamburger", "money-check-alt", "tooth", 
"capsules", "first-aid", "utensils", "wine-glass-alt", "tshirt" , "taxi", 
"gamepad", "film", "ticket-alt", "dog", "credit-card", "donate", "gift"]

const incomeTags: IconProp[] = ["piggy-bank", "money-check-alt", "dollar-sign", "gift", "money-check"]

export {initTags, totalTags}