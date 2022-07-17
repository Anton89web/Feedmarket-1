import classes from "./carousel.module.scss";
import Image from "next/image";

const Carousel = () =>{
    return(
        <div className={classes.product__carousel}>
            <div className={classes.product__carousel__img}>
                <Image src={'/card/PreMix-Pigs.jpg'} width={240} height={340} alt={'img_product'}/>
            </div>
            <div className={classes.carousel__bottom}>
                <div className={classes.carousel__bottom__chevron_left}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0812 3.52876C10.3416 3.78911 10.3416 4.21122 10.0812 4.47157L6.55261 8.00016L10.0812 11.5288C10.3416 11.7891 10.3416 12.2112 10.0812 12.4716C9.82086 12.7319 9.39875 12.7319 9.1384 12.4716L4.66699 8.00016L9.1384 3.52876C9.39875 3.26841 9.82086 3.26841 10.0812 3.52876Z" fill="#414141"/>
                    </svg>
                </div>
                <div className={classes.carousel__bottom__img}>
                    <Image src={'/card/PreMix-Pigs.jpg'} width={45} height={64} alt={'img_product'}/>
                </div>
                <div className={classes.carousel__bottom__img}>
                    <Image src={'/card/PreMix-layers.jpg'} width={45} height={64} alt={'img_product'}/>
                </div>
                <div className={classes.carousel__bottom__img}>
                    <Image src={'/card/PreMix-Poultry.jpg'} width={45} height={64} alt={'img_product'}/>
                </div>
                <div className={classes.carousel__bottom__img}>
                    <Image src={'/card/PreMix-Ruminant.jpg'} width={45} height={64} alt={'img_product'}/>
                </div>
                <div className={classes.carousel__bottom__chevron_right}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.19516 3.52876C5.93481 3.78911 5.93481 4.21122 6.19516 4.47157L9.72376 8.00016L6.19516 11.5288C5.93481 11.7891 5.93481 12.2112 6.19516 12.4716C6.45551 12.7319 6.87762 12.7319 7.13797 12.4716L11.6094 8.00016L7.13797 3.52876C6.87762 3.26841 6.45551 3.26841 6.19516 3.52876Z" fill="#414141"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Carousel

