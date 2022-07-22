import classes from './list_characteristic.module.scss';

const ListCharacteristic = ({ scrollToRef }) => {
	return (
		<div className={classes.text__wrapper}>
			<div className={classes.text__left}>
				<div className={classes.text__strouk}>
					<div className={classes.text__description}>Категория</div>
					<div className={classes.text__line} />
				</div>
				<div className={classes.text__strouk}>
					<div className={classes.text__description}>Тип</div>
					<div className={classes.text__line} />
				</div>
				<div className={classes.text__strouk}>
					<div className={classes.text__description}>Вид</div>
					<div className={classes.text__line} />
				</div>
				<div className={classes.text__strouk}>
					<div className={classes.text__description}>Возраст животного</div>
					<div className={classes.text__line} />
				</div>
				<div className={classes.text__strouk}>
					<div className={classes.text__description}>Процент ввода</div>
					<div className={classes.text__line} />
				</div>
				<div className={classes.text__strouk}>
					<div className={classes.text__description}>Вес в упаковке, кг</div>
					<div className={classes.text__line} />
				</div>
				<div className={classes.text__strouk}>
					<div className={classes.text__descirption}>
						<nobr>Страна изготовитель</nobr>
					</div>
					<div className={classes.text__line} />
				</div>
				<a className={classes.text__link} onClick={() => scrollToRef()}>
					Подробные характеристики
				</a>
			</div>

			<div className={classes.text__right__wrapper}>
				<div className={classes.text__right}>Птицеводство</div>
				<div className={classes.text__right}>Премикс, 1%</div>
				<div className={classes.text__right}>Бройлер</div>
				<div className={classes.text__right}>6 месяцев</div>
				<div className={classes.text__right}>10 кг/т</div>
				<div className={classes.text__right}>10</div>
				<div className={classes.text__right}>Российская Федерация</div>
			</div>
		</div>
	);
};

export default ListCharacteristic;
