import Layout from 'components/common/layouts';
import CardGrid from 'components/common/cards_grid/cards_grid';
import cards from '/mock/cards.json';
import Recomend from '/components/pages/home/recomend/recomend';
import classes from './Details_product.module.scss';
import {useRef} from "react";
import Carousel from "../UI/carousel/carousel";
import PriseTag from "../UI/price_tag/prise_tag";
import ListCharacteristic from "../components/list_characteristic/list_characteristic";
import DatailedCharacteristic from "../components/common/datailed_characteristic/datailed_characteristic";

const Details_product = ({ cards }) => {
	const myRef = useRef(null);
	const scrollToRef = () => myRef.current.scrollIntoView({behavior: "smooth"});
	return (
		<Layout>
			<div className={classes.main__grid}>
				<div className={classes.main__grid__left}>
					<div className={classes.product__title}>
						<Carousel/>
						<ListCharacteristic/>
					</div>
					<div className={classes.block__characteristic}>
						<h2 className={classes.block__characteristic_title}>Описание</h2>
						<p className={classes.block__characteristic_text}>Принимая во внимание показатели успешности, перспективное планирование обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы неоднозначны и будут призваны к ответу. Прежде всего, высокое качество позиционных исследований выявляет срочную потребность форм воздействия. Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии представлены в исключительно положительном свете.</p>
					</div>
					<div className={classes.block__characteristic}>
						<h2 className={classes.block__characteristic_title}>Состав</h2>
						<p className={classes.block__characteristic_text}>Учитывая ключевые сценарии поведения, глубокий уровень погружения выявляет срочную потребность глубокомысленных рассуждений. Есть над чем задуматься: элементы политического процесса функционально разнесены на независимые элементы.</p>
					</div>
					<div className={classes.block__characteristic}>
						<h2 className={classes.block__characteristic_title}>Рекомендуемый рецепт 	  	 							смешивания<br/>(Комбикорм)
						</h2>
						<p className={classes.block__characteristic_text}>
							<span className={classes.block__characteristic_subtitle}>Вам потребуется:</span>
							<ul className={classes.block__characteristic_list}>
								<li>Пшеница — 550 граммов (предельная норма ввода 600 граммов — 60%);</li>
								<li>Ячмень — 150 граммов (предельная норма ввода 300 граммов — 30%);</li>
								<li>Отруби пшеничные — 50 граммов (предельная норма ввода 100 граммов — 10%);</li>
								<li>Жмых подсолнечный — 100 граммов (предельная норма ввода 150 граммов — 15%);</li>
								<li>Мука мясокостная — 40 граммов (предельная норма ввода 70 граммов — 7%);</li>
								<li>Масло подсолнечное — 20 граммов (предельная норма ввода 30 граммов — 3%);</li>
								<li>Ракушка — 50 граммов (предельная норма ввода 80 граммов — 8%);</li>
								<li>Мел кормовой — 27 граммов (предельная норма ввода 30 граммов — 3%);</li>
								<li>Соль поваренная — 3 грамма (предельная норма ввода 3 грамма — 0,3%);</li>
								<li>Премикс (1%) для кур-несушек промышленного стада — 10 граммов (предельная 								норма ввода 10 граммов — 1%)</li>
							</ul>

						</p>
						<div className={classes.card__button_long}>
							Заказать индивидуальный рецепт
						</div>
					</div>

					<div className={classes.detailed__characteristic}>
						<h2 className={classes.detailed__characteristic_title} ref={myRef}>
							Подробные характеристики
						</h2>
						<div className={classes.detailed__characteristic_wrapper}>
							<DatailedCharacteristic/>
							<DatailedCharacteristic/>
						</div>

					</div>
				</div>

				<div className={classes.main__grid__right}>
					<PriseTag/>
				</div>
			</div>
				<Recomend/>
				<CardGrid type="row" cards={cards}/>
		</Layout>
	);
};
export async function getStaticProps() {
	return {
		props: cards,
	};
}
export default Details_product;
