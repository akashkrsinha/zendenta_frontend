import React, { useState } from 'react'
import style from '../styles/rightContent.module.css'

export default function RightContent() {
    const [showFile2, setShowFile2] = useState(true)
    const [showFile4, setShowFile4] = useState(true)

    function delFileContainer2() {
        setShowFile2(!showFile2)
    }
    function delFileContainer4() {
        setShowFile4(!showFile4)
    }

    return (
        // Right SideBar of Patient Detail Container
        <div className={style.rightContainer}>

            {/* Top Right SideBar */}
            <div className={style.rightFirstContainer}>
                <div className={style.rightFirstSubFirst}>
                    <div>Notes</div>
                    <div>See all</div>
                </div>
                <div className={style.rightFirstSubSecond}>
                    <div>- This patient is lorem ipsum dolor sit amet</div>
                    <div>- Lorem ipsum dolor sit amet</div>
                    <div>- has alergic hostory with Cataflam</div>
                    <button>Save note</button>
                </div>
                <div className={style.rightFirstSubThird}>Lorem ipsum dolor sit amet</div>
                <div className={style.rightFirstSubFourth}>
                    <div>
                        <i className="fa-solid fa-user"></i> Drd. Mega Nanade
                    </div>
                    <div>20 Nov '19</div>
                </div>
            </div>

            {/* Bottom Right SideBar */}
            <div className={style.rightSecondContainer}>
                <div className={style.rightSecondSubFirst}>
                    <div>Files / Documents</div>
                    <div><i className="fa fa-file"></i> Add Files</div>
                </div>
                <div className={style.rightSecondSubSecond}>
                    <div className={style.SubSecondSubFirst}>
                        <div><i className="fa-solid fa-file-lines"></i> Check Up Result.pdf</div>
                        <div>123kb</div>
                    </div>
                    <div className={showFile2 ? style.SubSecondSubSecond : style.hideFileContainer}>
                        <div><i className="fa-solid fa-file-lines"></i> Dental X-Ray Result 2.pdf</div>
                        <div><i className="fa-solid fa-trash-can" onClick={delFileContainer2}></i><i className="fa-solid fa-circle-arrow-down"></i></div>
                    </div>
                    <div className={style.SubSecondSubThird}>
                        <div><i className="fa-solid fa-file-lines"></i> Medical Prescriptions.pdf</div>
                        <div>87kb</div>
                    </div>
                    <div className={showFile4 ? style.SubSecondSubSecond : style.hideFileContainer}>
                        <div><i className="fa-solid fa-file-lines"></i> Dental X-Ray Result.pdf</div>
                        <div><i className="fa-solid fa-trash-can" onClick={delFileContainer4}></i> <i className="fa-solid fa-circle-arrow-down"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
