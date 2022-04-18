import React, { useState, useEffect } from 'react'
import style from '../styles/leftContent.module.css'
import UserImage from '../images/userImage.png'

export default function LeftContent() {
  const [toggleTab, setToggleTab] = useState(1);
  const [data, setData] = useState()
  const [appointmentData, setAppointmentData] = useState()

  const changeTag = (index) => {
    setToggleTab(index)
  }

  let fetchData = () => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
      .then((response) => response.json())
      .then((json) => {
        setData(json[0])
      })
      .catch((error) => alert(error))
  }

  let fetchAppointmentData = () => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
      .then((response) => response.json())
      .then((json) => {
        setAppointmentData(json[0])
      })
      .catch((error) => alert(error))
  }

  useEffect(() => {
    fetchData()
    fetchAppointmentData()
  }, [])


  return (
    // Left Part of all Patient Details
    <div className={style.leftContainer}>

      {/* First Part Of Left Side of Patient Details */}
      <div className={style.leftFirstContainer}>

        {/* Patient Details First Container */}
        <div className={style.leftSubFirstContainer}>
          <div className={style.profileImageContainer}><img src={UserImage} alt='userImage' className={style.profileImage} /></div>
          <div className={style.userName}>{data !== undefined ? data.name : ""}</div>
          <div className={style.userEmail}>{data !== undefined ? data["e-email"] : ""}</div>
          <div className={style.postsContainer}>
            <div className={style.userPost}>
              <div className={style.posts}>{data !== undefined ? data.Past : ""}</div>
              <div className={style.postText}>Post</div>
            </div>
            <div className={style.userUpcoming}>
              <div className={style.upcomingPosts}>{data !== undefined ? data.Upcoming : ""}
              </div>
              <div className={style.upcomingText}>Upcoming</div>
            </div>
          </div>
          <button>Send Message</button>
        </div>

        {/* Patient Details Second Container */}
        <div className={style.leftSubSecondContainer}>
          <div>
            <div className={style.genderContainer}>
              <div className={style.genderText}>Gender</div>
              <div className={style.gender}>{data !== undefined ? data.Gender : ""}</div>
            </div>
            <div className={style.birthdayContainer}>
              <div className={style.birthdayText}>birthday</div>
              <div className={style.birthday}>{data !== undefined ? data.Birthday : ""}</div>
            </div>
            <div className={style.phoneNumberContainer}>
              <div className={style.phoneNumberText}>Phone Number</div>
              <div className={style.phoneNumber}>{data !== undefined ? data["Phone Number"] : ""}</div>
            </div>
          </div>
          <div>
            <div className={style.addressContainer}>
              <div className={style.addressText}>Street Address</div>
              <div className={style.address}>{data !== undefined ? data["Street Address"] : ""}</div>
            </div>
            <div className={style.cityContainer}>
              <div className={style.cityText}>City</div>
              <div className={style.city}>New York</div>
            </div>
            <div className={style.zipContainer}>
              <div className={style.zipText}>ZIP Code</div>
              <div className={style.zip}>{data !== undefined ? data["ZIP Code"] : ""}</div>
            </div>
          </div>
          <div>
            <div className={style.memberStatusContainer}>
              <div className={style.memberStatusText}>Member Status</div>
              <div className={style.memberStatus}>{data !== undefined ? data["Member Status"] : ""}</div>
            </div>
            <div className={style.dateContainer}>
              <div className={style.dateText}>Registered Date</div>
              <div className={style.date}>{data !== undefined ? data["Register Date"] : ""}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Part Of Left Side of Patient Details */}
      <div className={style.leftSecondContainer}>

        {/* Different Tabs */}
        <div className={style.leftSecondContainerSubFirst}>
          <div className={toggleTab === 1 ? style.activeTag : style.upComingAppointments} onClick={() => changeTag(1)}>Upcoming Appointments </div>
          <div className={toggleTab === 2 ? style.activeTag : style.postAppointments} onClick={() => changeTag(2)}>Post Appointments</div>
          <div className={toggleTab === 3 ? style.activeTag : style.medicalRecords} onClick={() => changeTag(3)}>Medical Records</div>
        </div>

        {/* Tab Data */}
        <div className={style.leftSecondContainerSubSecond}>
          <div className={style.SubSecondSubFirst}>
            <div className={toggleTab === 1 ? style.treatmentHeading : style.hideContent}>
              <div>Root Canal Treatment</div>
              <div> <i className="fa fa-angle-up"></i> Show Previous Treatment</div>
            </div>
            <div className={toggleTab === 1 ? style.treatmentList : style.hideContent}>

              {/* Line and Circle before Patient appointment detail */}
              <div className={style.treatmentDateLine}>
                <div></div>
                <div></div>
              </div>

              {/* Patient Appointment Detail Container */}
              <div className={style.appointmentDetails}>

                {/* Details For First Appointment */}
                <div className={style.firstAppointment}>
                  <div className={style.appointmentDateContainer}>
                    <div className={style.appointmentDateText}>{appointmentData !== undefined ? appointmentData["Upcoming Appointments"].Date : ""}</div>
                    <div className={style.appointmentTime}>{appointmentData !== undefined ? appointmentData["Upcoming Appointments"].Time : ""}</div>
                  </div>
                  <div className={style.treatmentContainer}>
                    <div className={style.treatmentText}>Treatment</div>
                    <div className={style.treatment}>{appointmentData !== undefined ? appointmentData["Upcoming Appointments"].Treatment : ""}</div>
                  </div>
                  <div className={style.dentistContainer}>
                    <div className={style.dentistText}>Dentist</div>
                    <div className={style.dentist}>{appointmentData !== undefined ? appointmentData["Upcoming Appointments"].Dentist : ""}</div>
                  </div>
                  <div className={style.nurseContainer}>
                    <div className={style.nurseText}>Nurse</div>
                    <div className={style.nurse}>{appointmentData !== undefined ? appointmentData["Upcoming Appointments"].Nurse : ""}</div>
                  </div>
                  <div className={style.noteContainer}>
                    <i className="fa fa-file-text-o" aria-hidden="true"></i> Note
                  </div>
                </div>

                {/* Details For Second Appointment */}
                <div className={style.secondAppointment}>
                  <div className={style.appointmentDateContainer}>
                    <div className={style.appointmentDateText}>12 Dec '19</div>
                    <div className={style.appointmentTime}>09.00 - 10.00</div>
                  </div>
                  <div className={style.treatmentContainer}>
                    <div className={style.treatmentText}>Treatment</div>
                    <div className={style.treatment}>Root Canal Prep</div>
                  </div>
                  <div className={style.dentistContainer}>
                    <div className={style.dentistText}>Dentist</div>
                    <div className={style.dentist}>Drg. Adam H.</div>
                  </div>
                  <div className={style.nurseContainer}>
                    <div className={style.nurseText}>Nurse</div>
                    <div className={style.nurse}>Jessicamila</div>
                  </div>
                  <div className={style.noteContainer}>
                    <i className="fa fa-file-text-o" aria-hidden="true"></i> Note
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.SubSecondSubSecond}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
