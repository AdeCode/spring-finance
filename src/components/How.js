import React from 'react'
import howDesk from '../images/institution/how-desk.png'
import how from '../images/institution/how.png'
import global from '../images/institution/global.png'
import integrate from '../images/institution/integrate.png'
import data from '../images/institution/data.png'
import InstitutionForm from './InstitutionForm'

function How() {
    return (
        <div className='lg:px-[200px] px-[25px] flex flex-col items-center justify-center'>
            <h1 className='lg:text-5xl lg:font-bold text-2xl font-Gilroy mt-[19px] mb-3 lg:mt-[77px] lg:mb-[40px]'>How it works</h1>
            <p className='lg:w-[640px] text-center text-sm lg:text-base mb-6 text-primary_text'>Pay in local currency into your virtual wallet, convert your funds to the country of study currency and you can pay directly into the education institution bank account with no other party involve in making payment for you.</p>
            <div>
                <img className='hidden lg:block' src={howDesk} alt='how it works' />
                <img className='lg:hidden' src={how} alt='how it works' />
            </div>
            <div className='w-full flex flex-col mt-7 lg:mt-[70px]'>
                <h2 className='font-bold text-2xl lg:text-4xl text-center lg:w-[1200px] mb-[7px] lg:mb-[15px]'>
                    We are open to work with various institutions around the world, while they benefit from the services we offer?
                </h2>
                <p className='font-normal text-center text-sm lg:text-2xl text-how_p'>We are always ready to answer your questions, inquires, and more.</p>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-36 lg:mt-14 mt-8 lg:h-[fill] lg:items-center lg:pb-9'>
                <div className="flex flex-col lg:gap-12 gap-3">
                    <div className='flex flex-col items-center lg:flex-row lg:gap-9 gap-5'>
                        <div className=''>
                            <img src={data} alt='Student information system'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold lg:text-2xl text-center lg:text-start text-base '>Student Information Systems</h3>
                            <p className='font-normal lg:text-xl text-sm lg:text-start text-center text-st_text'>The Student Information System integration will work with your existing school administrative infrastructure.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center lg:flex-row lg:gap-9 gap-5'>
                        <div>
                            <img src={global} alt='Student information system'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold lg:text-2xl text-center lg:text-start text-base '>Student Information Systems</h3>
                            <p className='font-normal lg:text-xl text-sm lg:text-start text-center text-st_text'>The Student Information System integration will work with your existing school administrative infrastructure.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center lg:flex-row lg:gap-9 gap-5'>
                        <div>
                            <img src={integrate} alt='Student information system'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold lg:text-2xl text-center lg:text-start text-base '>Student Information Systems</h3>
                            <p className='font-normal lg:text-xl text-sm lg:text-start text-center text-st_text'>The Student Information System integration will work with your existing school administrative infrastructure.</p>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <InstitutionForm/>
                </div>

            </div>
        </div>
    )
}

export default How