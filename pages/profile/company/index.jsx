import LayoutLoginProfile from '../../../components/Layout/LayoutLoginProfil'
import SectionPage from '../../../components/Section/SectionPage'
import React from 'react'
import style from './company.module.css'
// import background from '../../Assets/CompanyProfile/background.jpg'
import Image from 'next/image'
import img from '../../../public/image/company.jpg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const CompanyProfile = () => {
    return (
        <LayoutLoginProfile>
            <SectionPage sty={{ marginTop: "130px", marginBottom: "50px" }}>
                <div className={`box ${style.box}`}>
                    <div className="row justify-content-center">
                        <div>
                            <div className={`${style.boxBackground} d-flex justify-content-end align-items-end`} style={{backgroundColor: "#ffffff"}}>
                                <Image src={img} className={`img-fluid ${style.img}`}></Image>
                                <Link href={''} className='pe-4 pb-2'></Link>
                            </div>
                            <div className="box-content text-center">
                                <h2>PT. Martabat Jaya Abadi</h2>
                                <p>Technology Information</p>
                                <p className='text-secondary'><FontAwesomeIcon icon={faLocationDot} /> Purwokerto, Jawa Tengah</p>
                                <p className='px-5'>PT Martabat Jaya Abadi adalah perusahaan teknologi informasi yang didirikan pada tahun 2010. Kami menyediakan solusi teknologi informasi terbaik untuk membantu bisnis dan organisasi mengoptimalkan kinerja mereka. Layanan yang kami sediakan meliputi pengembangan perangkat lunak, desain dan pengembangan website, jaringan dan sistem keamanan, dan layanan konsultasi IT.</p>
                                <div className="row justify-content-center text-start ">
                                    <div className="col-6 col-md-3 d-grid text-center mb-4">
                                        <div className="button d-grid">
                                        <button className='btn btn-primary' style={{height: '50px', backgroundColor: '#5E50A1', borderColor: '#5E50A1'}}>Edit Profile</button>
                                        </div>
                                    </div>
                                    <div className="col-12 d-grid justify-content-center mb-5">
                                        <p><FontAwesomeIcon icon={faEnvelope} /> martabatjaya@gmail.com</p>
                                        <p><FontAwesomeIcon icon={faInstagram} /> martabat_jaya</p>      
                                        <p><FontAwesomeIcon icon={faPhone} /> 0821-8190-1821</p>
                                        <p><FontAwesomeIcon icon={faLinkedin} /> Martabat Jaya Abadi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default CompanyProfile