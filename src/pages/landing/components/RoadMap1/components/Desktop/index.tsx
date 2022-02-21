import React from 'react'
import './styles/styles.scss'
import data from '../../mock-data/road.json'
import LogoAntro from '../../images/roadmap_logoAntro.png'
import LogoBC from '../../images/roadmap_logoBC.png'
import LogoLH from '../../images/roadmap_logoLH.png'
import LogoSL from '../../images/roadmap_logoSL.png'
import Contour from '../../images/folder.svg'
import Ellipse from '../../images/roadmap_ellipseBottom.png'
import EllipsePath from '../../images/roadmap_ellipseBottom_path.png'
import EllipseDark from '../../images/roadmap_ellipseTop.png'
import Puls from '../../images/puls.png'

export const Desktop: React.FC = () => {
  const road = data.map((el) => {
    const status = el.status === 'active' ? 'circle active' : 'circle'
    const activeWrapperStyles = el.status === 'active' ? { paddingTop: '35px' } : { paddingTop: '15px' }

    const heightStyles = el.task3 ? { height: '700px' } : { height: '615px' }

    return (
      <li key={el.id} className={status}>
        <div className='wrapper' style={heightStyles}>
          <h4>{el.quarter}</h4>

          <ul className='points' style={activeWrapperStyles}>
            <li className='point'>{el.task1}</li>

            {el.task2 && Array.isArray(el.task2) ? (
              <div className='wrapper' key={el.task2[0].id} style={{ transform: 'translateY(-25px)' }}>
                <h4>{el.task2[0].quarter}</h4>
                <li className='point'>{el.task2[0].task1}</li>
              </div>
            ) : (
              <li className='point'>{el.task2}</li>
            )}
            {el.task3 && <li className='point'>{el.task3}</li>}
          </ul>
        </div>
      </li>
    )
  })

  return (
    <div className='container'>
      <h1 className='title'>Дорожная карта</h1>

      <div className='folder'>
        <img src={Contour} alt='Contour' />
        <ul className='circles'>{road}</ul>
      </div>

      <div className='orbit'>
        <div className='block_ellips'>
          <img src={Puls} alt='Puls' className='puls' />
          <img src={Ellipse} alt='Ellipse' className='ellipse' />
          <img src={EllipsePath} alt='Path' className='path' />
          <img src={EllipseDark} alt='Ellipse-dark' className='ellipse_drk' />
        </div>

        <div className='block_logo'>
          <div />
          <img id='1' src={LogoBC} alt='LogoBC' />
          <img id='2' src={LogoSL} alt='LogoSL' />
          <img id='3' src={LogoAntro} alt='LogoAntro' />
          <img id='4' src={LogoLH} alt='LogoLH' />
          <div />
        </div>
      </div>
    </div>
  )
}
