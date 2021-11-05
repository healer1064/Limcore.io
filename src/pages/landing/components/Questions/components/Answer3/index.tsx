import React from 'react'
import Styles from './styles.module.scss'

interface Answer3Props {
  list?: string
}

export const Answer3: React.FC<Answer3Props> = ({ list }) => {
  return (
    <>
      <ul className={list === 'mobile' ? `${Styles.list} ${Styles.list_mod}` : `${Styles.list}`}>
        <li>
          <p className={Styles.text}>Низкий порог входа, начиная всего с 0,1 LIMC</p>
        </li>
        <li>
          <p className={Styles.text}>Не требуется дорогостоящее оборудование или техническое обслуживание.</p>
        </li>
        <li>
          <p className={Styles.text}>Никаких дополнительных затрат на электроэнергию и т. д.</p>
        </li>
        <li>
          <p className={Styles.text}>Высокая эффективность фарминга.</p>
        </li>
        <li>
          <p className={Styles.text}>Прозрачность.</p>
        </li>
        <li>
          <p className={Styles.text}>Механика DeFi в распределении наград.</p>
        </li>
      </ul>
      <p className={Styles.text}>
        Список поддерживаемых форков постоянно увеличивается, позволяя увеличивать доход для пользователей Limcore.
      </p>
      <p className={Styles.text}>
        Награда рассчитывается real time и переводится на счет раз в сутки на кошелек XCH. Вся недвижимость, земля и
        оборудование полностью принадлежат Проекту по праву собственности.
      </p>
      <p className={Styles.text}>
        Мы открыты к встречам и приглашаем всех желающих на экскурсии. Московская область, город Можайск. улица Мира дом
        98.
      </p>
    </>
  )
}
