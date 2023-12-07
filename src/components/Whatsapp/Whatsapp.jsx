import { RiWhatsappFill } from "react-icons/ri";
import "./Whatsapp.scss"
import gsap from "gsap";
import { useEffect } from "react";
export default props =>{ 
    useEffect(()=>{
        gsap.fromTo("#whatsappText",{
            opacity:0.4,
            height:  '80%',
        },{
            opacity:1,
            duration:1,
            ease: "expo.out",
            repeat:-1,
            yoyo:true,
            scale:1.04
    })
    },[])
    return(
        <div id="whatsapp">
        <a id="whatsappText" href="https://wa.me/5571982187183?text=Oi">
        <RiWhatsappFill />
 Fale conosco no Whats!
        </a>
        </div>
    )
}