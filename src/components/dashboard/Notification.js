import React, { useState } from 'react'
import styled from 'styled-components'
import CouponData from '../@shared/CouponData'
import SummaryCard from '../@shared/SummaryCard'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputField from '../@shared/dashboard/InputField'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import SelectField from '../@shared/dashboard/SelectField'
import close from '../../images/dashboard/close.png'
import NotificationTable from '../@tables/NotificationTable'


const style = {
    display: 'flex',
    flexDirection:'column',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '50px 40px',
}

function Notification({ children }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addCouponMutation = () => { }

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Section className='pr-8'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff', height: 'fit-content' }}
            >
                {/* <div className="flex justify-center items-center">
                <div className="modal-content">
                    <h2>Add Coupon here</h2>
                </div>
           </div> */}
                <Box sx={style}>
                    <div className='flex justify-between'>
                        <h2 className='text-[#6A707E] text-2xl mb-9 font-medium'>Create new coupons</h2>
                        <h3 onClick={handleClose} className='cursor-pointer'>
                            <img src={close} alt='close'/>
                        </h3>
                    </div>
                    <div className="form">
                        <Formik
                            initialValues={{
                                headerNotificationType: '',
                                notificationType: '',
                                country: '',
                                title: '',
                                description: '',
                                notificationBanner: '',
                            }}
                            validationSchema={
                                Yup.object({
                                    headerNotificationType: Yup.string()
                                        .required("Field is required"),
                                    notificationType: Yup.string()
                                        .required("Field is required"),
                                    country: Yup.string()
                                        .required("Please select your country"),
                                    title: Yup.string()
                                        .required("Please select your country"),
                                    description: Yup.string()
                                        .required("Please select your country"),
                                    notificationBanner: Yup.string()
                                        .required("Please select your country"),
                                })
                            }
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false)
                                onSubmit(values)
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className='flex flex-col w-full'>
                                    <div className=''>
                                        <div className=''>
                                            <div className='flex justify-between w-full gap-9'>
                                                <SelectField
                                                    name='headerNotificationType'
                                                    type='text'
                                                    label='Home page header Notification type '
                                                >
                                                    <option value=''>Select Type</option>
                                                    <option value='Male'>Animated (scrolling)</option>
                                                    <option value='Female'>Female</option>
                                                </SelectField>
                                                <SelectField
                                                    name='notificationType'
                                                    type='text'
                                                    label='Notification Type:'
                                                >
                                                    <option value=''>Select product</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </SelectField>
                                                <SelectField
                                                    name='country'
                                                    type='text'
                                                    label='Country'
                                                >
                                                    <option value=''>Select</option>
                                                    <option value='Nigeria'>Nigeria</option>
                                                    <option value='Mali'>Mali</option>
                                                </SelectField>
                                            </div>
                                            <div className='flex justify-between w-full'>
                                              <div className='flex w-[70%]'>
                                                <div className='w-full flex-col'>
                                                <InputField
                                                    name='title'
                                                    type='text'
                                                    placeholder='E.g 39 Oluwakemi Street 83759 SimisolaVille '
                                                    label='Title (optional)'
                                                />
                                                <SelectField
                                                    name='country'
                                                    type='text'
                                                    label='Country'
                                                >
                                                    <option value=''>Select</option>
                                                    <option value='Nigeria'>Nigeria</option>
                                                    <option value='Mali'>Mali</option>
                                                </SelectField>
                                                </div>
                                                
                                              </div>
                                              <div className='w-[25%]'>
                                                <h3 className=''>Upload Banner</h3>
                                              </div>
                                               {/* <InputField
                                                    name='title'
                                                    type='text'
                                                    placeholder='E.g 39 Oluwakemi Street 83759 SimisolaVille '
                                                    label='Title (optional)'
                                                />
                                                <SelectField
                                                    name='country'
                                                    type='text'
                                                    label='Country'
                                                >
                                                    <option value=''>Select</option>
                                                    <option value='Nigeria'>Nigeria</option>
                                                    <option value='Mali'>Mali</option>
                                                </SelectField>
                                                <SelectField
                                                    name='codeNumber'
                                                    type='text'
                                                    label='Code Number'
                                                >
                                                    <option value=''>E.g 100</option>
                                                    <option value='Nigeria'>Nigeria</option>
                                                    <option value='Mali'>Mali</option>
                                                </SelectField> */}
                                            </div>
                                            <div className='flex w-full gap-9'>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full lg:justify-start">
                                        <Button type="submit" disabled={isSubmitting} className='py-[11px] w-fit lg:px-14 rounded-[5px] text-white text-[16px] mt-[13px]'>
                                            {
                                                addCouponMutation.isLoading
                                                    ? "Please wait..."
                                                    : "Create"
                                            }
                                        </Button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>

                </Box>
            </Modal>
            <div className='flex flex-col justify-between mb-10'>
                <h2 className="text-[#6A707E] text-2xl mb-4">Notification</h2>
                <h3 className='mb-5 text-[#6A707E] text-base lg:w-[880px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt tellus non elementum euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce varius tempor feugiat. Duis consectetur, 
                  dui vel consectetur varius, mauris magna tristique orci, nec vehicula mauris leo vel nulla.</h3>
                <button className="text-base btn text-white font-medium py-4 px-5 rounded-[5px] w-fit" onClick={handleOpen}>Create new notification</button>
            </div>
            {/* <div className='flex w-full gap-7 mb-7'>
                {
                    CouponData.map(coupon => {
                        return (
                            <SummaryCard
                                name={coupon.title}
                                icon={coupon.icon}
                                amount={coupon.amount}
                                percentage={coupon.percentage}
                            />
                        )
                    })
                }
            </div> */}
            <NotificationTable />
        </Section>

    )
}


const Section = styled.section`
    .btn{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%)
    }

    .modal-content{
        display:flex;
        justify-content:center;
        align-items:center;
        width:800;
        background-color:#ffffff;
        border:2px solid #000;
        padding:4px;
    }

    .form{

        .btn{
            background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%)
        }
    }
`


const Button = styled.button`
    background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
`

export default Notification