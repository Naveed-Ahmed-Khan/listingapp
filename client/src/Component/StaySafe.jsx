import React from 'react'
import Staysafe from '../assets/img/staySafe.jpg'
import * as FiIcon from 'react-icons/fi';
import * as AiIcon from 'react-icons/ai';
import * as RiIcon from 'react-icons/ri';



export default function StaySafe() {
  return (
    <div>
      {/*Breadcrumb*/}
        <section>
            <div
            className="bannerimg cover-image bg-background3 sptb-4"
            data-bs-image-src="../assets/images/banners/banner2.jpg"
            >
            <div className="header-text mb-0">
                <div className="container">
                <div className="text-center text-white">
                    <h1 className>Stay Safe</h1>
                </div>
                </div>
            </div>
            </div>
        </section>
      {/*/Breadcrumb*/}
      {/*section*/}
        <section className="sptb" style={{backgroundColor: '#fff'}}>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} align="right">
                        <h3 style={{color: '#0ea248', fontWeight: 'bold', lineHeight: '35px',}}>
                            Lorem ipsum dolor sit amet consectetur, adipiscing elit sed do euisimod tempor
                        </h3>
                        <p style={{fontSize: '17px', fontWeight: '200', lineHeight: '25px'}}>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p style={{fontSize: '20px', lineHeight: '28px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className='row my-8'>
                    <div className='col-md-6' align="center">
                        <img src={Staysafe} className='fluid' style={{width: '400px'}} />
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FiIcon.FiClock size={35} color='#0ea248' /> 
                                <h4 className='my-3' style={{color: '#0ea248', fontWeight: 'bold'}}>Design</h4>
                                <p className='my2' style={{color: 'grey', fontSize: '14px', lineHeight: '25px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <AiIcon.AiFillWarning size={35} color='#0ea248' /> 
                                <h4 className='my-3' style={{color: '#0ea248', fontWeight: 'bold'}}>Innovate</h4>
                                <p className='my2' style={{color: 'grey', fontSize: '14px', lineHeight: '25px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <AiIcon.AiFillBell size={35} color='#0ea248' /> 
                                <h4 className='my-3' style={{color: '#0ea248', fontWeight: 'bold'}}>Team Work</h4>
                                <p className='my2' style={{color: 'grey', fontSize: '14px', lineHeight: '25px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <RiIcon.RiSpyFill size={35} color='#0ea248' /> 
                                <h4 className='my-3' style={{color: '#0ea248', fontWeight: 'bold'}}>Build</h4>
                                <p className='my2' style={{color: 'grey', fontSize: '14px', lineHeight: '25px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
