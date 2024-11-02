import { MdAddLocationAlt, MdAirplaneTicket } from "react-icons/md";

import england from "../img/united-kingdom.png"
import russia from "../img/russia.png"
import karakalpak from "../img/karakalpakstan.png"
import { BiHomeSmile } from "react-icons/bi";
import { GiBeachBag, GiDesert } from "react-icons/gi";
import { CiMountain1 } from "react-icons/ci";

export const btnData = [
    {
        id: 1, path: "/", icon: BiHomeSmile, title: "home"
    },
    {
        id: 2, path: "/tours", icon: MdAirplaneTicket, title: "tours"
    },
    {
        id: 3, path: "/destination", icon: MdAddLocationAlt, title: "destination"
    }
]




export const langData = [
    {
        id: 1, img: england, title: "ENG"
    },
    {
        id: 2, img: russia, title: "RUS"
    },
    {
        id: 3, img: karakalpak, title: "QAR"
    }
]