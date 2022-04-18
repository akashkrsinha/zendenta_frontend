import React, { useState, useEffect } from 'react'
import style from '../styles/home.module.css'
import logo from '../images/logo.png'
import printerIcon from '../images/printerIcon.png'
import Content from './Content'
import DoctorPic from '../images/doctorPic.png'

export default function Home() {
  const [toggle, setToggle] = useState(3)
  const [showBar, setShowBar] = useState(true)
  const [doctorPanel, setDoctorPanel] = useState(true)
  const [data, setData] = useState()
  const [doctorDetails, setDoctorDetails] = useState()

  const changeMenu = (index) => {
    setToggle(index)
  }

  const menuBarClick = () => {
    setShowBar(!showBar)
  }

  const collapseDoctorPanel = () => {
    setDoctorPanel(!doctorPanel)
  }

  let fetchData = () => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
      .then((response) => response.json())
      .then((json) => {
        setData(json[0])
      })
      .catch((error) => alert(error))
  }

  let doctorData = () => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
      .then((response) => response.json())
      .then((json) => {
        setDoctorDetails(json[0])
      })
      .catch((error) => alert(error))
  }

  useEffect(() => {
    fetchData()
    doctorData()
  }, [])


  return (
    <div className={showBar ? style.home : style.resizeHome}>

      {/* Left Container Home Page */}
      <div className={style.left}>

        {/* Menu Upper Part */}
        <div className={style.leftUp}>
          {showBar && <div className={style.upFirst}><img src={logo} alt='logo'></img></div>}
          {showBar && <div className={style.upSecond}>
            <div className={style.text1}>Zendenta</div>
            <div className={style.text2}>Cabut gigi tanpa sakit</div>
          </div>}
          <div className={style.upThird} onClick={menuBarClick}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* Menu Middle Part */}
        <div className={style.leftMiddle}>
          <div className={toggle === 1 ? showBar ? style.activeMenu : style.falseBarActiveMenu : showBar ? style.menuItem : style.falseBarMenu} onClick={() => changeMenu(1)}><i className="fa-solid fa-circle-question"></i> {showBar && <span>Overview</span>}</div>
          <div className={toggle === 2 ? showBar ? style.activeMenu : style.falseBarActiveMenu : showBar ? style.menuItem : style.falseBarMenu} onClick={() => changeMenu(2)}><i className="fa fa-calendar"></i> {showBar && <span>Calendar</span>}</div>
          <div className={toggle === 3 ? showBar ? style.activeMenu : style.falseBarActiveMenu : showBar ? style.menuItem : style.falseBarMenu} onClick={() => changeMenu(3)}><i className="fa-regular fa-user"></i> {showBar && <span>Patient List</span>}</div>
          <div className={toggle === 4 ? showBar ? style.activeMenu : style.falseBarActiveMenu : showBar ? style.menuItem : style.falseBarMenu} onClick={() => changeMenu(4)}><i className="fa fa-commenting-o"></i> {showBar && <span>Messages</span>}</div>
          <div className={toggle === 5 ? showBar ? style.activeMenu : style.falseBarActiveMenu : showBar ? style.menuItem : style.falseBarMenu} onClick={() => changeMenu(5)}><i className="fa-solid fa-sack-dollar"></i> {showBar && <span>Payment information</span>}</div>
          <div className={toggle === 6 ? showBar ? style.activeMenu : style.falseBarActiveMenu : showBar ? style.menuItem : style.falseBarMenu} onClick={() => changeMenu(6)}><i className="fa-solid fa-sliders"></i> {showBar && <span>Setting</span>}</div>
          <div className={toggle === 7 ? showBar ? style.activeHelp : style.falseBarActiveHelp : showBar ? style.helpDiv : style.falseBarHelpDiv} onClick={() => changeMenu(7)}><i className="fa-solid fa-circle-info"></i> {showBar && <span>Help?</span>}</div>
        </div>

        {/* Menu Bottom Part */}
        {showBar && doctorPanel && <div className={style.leftBottom} id="leftBottom">
          <div className={style.bottomFirst}><img src={DoctorPic} alt='doctorImage'></img></div>
          <div className={style.bottomSecond}>
            <div className={style.bottomText1}>{doctorDetails !== undefined ? doctorDetails.name : ""}</div>
            <div className={style.bottomText2}>{doctorDetails !== undefined ? doctorDetails.specification : ""}</div>
          </div>
          <div className={style.bottomThird} onClick={collapseDoctorPanel}><i className='fas fa-angle-down'></i></div>
        </div>}

        {/* Work After Doctor Panel Collapse */}
        {doctorPanel === false && <div className={style.bottomThird} onClick={collapseDoctorPanel} id={style.afterDocPanelCollapse}><i className="fa-solid fa-angle-up"></i></div>}

      </div>

      {/* Right Container Home Page */}
      <div className={style.right}>
        <div className={toggle === 3 ? style.rightFirst : style.hideContent}>
          <i className="fa-regular fa-user"></i>
          <div className={style.rightTopText}>{data !== undefined ? data.name : ""}</div>
          <div className={style.inputSearchDiv}>
            <input type='text'></input>
            <div className={style.searchText}><i className="fa fa-search" aria-hidden="true"></i> Search</div>
          </div>
          <div className={style.rightTopCircle}>
            <div className={style.circleVerticalLine}></div>
            <div className={style.circleHorizontalLine}></div>
          </div>
          <div className={style.bellCircle}>
            <i className="fa-solid fa-bell"></i>
            <div className={style.smallCircle}></div>
          </div>
        </div>
        <div className={toggle === 3 ? style.rightSecond : style.hideContent}>
          <div className={style.rightSecondText1}> Patient List</div>
          <i className='fas fa-angle-right'></i>
          <div className={style.rightSecondText2}>{data !== undefined ? data.name : ""}</div>
          <div className={style.printerDiv}><img src={printerIcon} alt='Printer Icon' /></div>
          <div className={style.editPatientDiv}>
            <div className={style.innerEditContainer}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Patient</div>
          </div>
        </div>

        {/* All Patient Details */}
        <div className={toggle === 3 ? style.rightThird : style.hideContent}><Content /></div>
      </div>
    </div>
  )
}
