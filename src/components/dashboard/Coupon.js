import React, { useState } from 'react'
import styled from 'styled-components'
import CouponData from '../@shared/CouponData'
import SummaryCard from '../@shared/SummaryCard'
import CouponNotificationTable from '../@tables/CouponNotificationTable'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputField from '../@shared/dashboard/InputField'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import SelectField from '../@shared/dashboard/SelectField'
import close from '../../images/dashboard/close.png'


const style = {
    display: 'flex',
    flexDirection:'column',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '50px 40px',
}

function Coupon({ children }) {
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
                                codeName: '',
                                codeDiscount: '',
                                product: '',
                                status: '',
                                country: '',
                                codeNumber: '',
                                startDate: '',
                                endDate: '',
                            }}
                            validationSchema={
                                Yup.object({
                                    codeName: Yup.string()
                                        .required("Field is required"),
                                    codeDiscount: Yup.number()
                                        .required("Field is required"),
                                    product: Yup.string()
                                        .required("Field is required"),
                                    status: Yup.string()
                                        .required("Field is required"),
                                    codeNumber: Yup.string()
                                        .required("Field is required"),
                                    startDate: Yup.date()
                                        .required("Field is required"),
                                    endDate: Yup.date()
                                        .required("Field is required"),
                                    country: Yup.string()
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
                                                <InputField
                                                    name='codeName'
                                                    type='text'
                                                    placeholder='E.g Oluwakemi'
                                                    label='Code Name'
                                                />
                                                <InputField
                                                    name='codeDiscount'
                                                    type='text'
                                                    placeholder='E.g Simisola'
                                                    label='Code Discount'
                                                />
                                                <SelectField
                                                    name='product'
                                                    type='text'
                                                    label='Product'
                                                >
                                                    <option value=''>Select product</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </SelectField>
                                            </div>
                                            <div className='flex justify-between w-full gap-9'>
                                                <SelectField
                                                    name='status'
                                                    type='text'
                                                    label='Status'
                                                >
                                                    <option value=''>Select status</option>
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
                                                <SelectField
                                                    name='codeNumber'
                                                    type='text'
                                                    label='Code Number'
                                                >
                                                    <option value=''>E.g 100</option>
                                                    <option value='Nigeria'>Nigeria</option>
                                                    <option value='Mali'>Mali</option>
                                                </SelectField>
                                            </div>
                                            <div className='flex w-full gap-9'>
                                                <InputField
                                                    name='startDate'
                                                    type='date'
                                                    placeholder='E.g 39 Oluwakemi Street 83759 SimisolaVille '
                                                    label='Start Date'
                                                />
                                                <InputField
                                                    name='endDate'
                                                    type='date'
                                                    placeholder='E.g 39 Oluwakemi Street 83759 SimisolaVille '
                                                    label='End Date'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full lg:justify-start">
                                        <Button type="submit" disabled={isSubmitting} className='py-[11px] w-fit lg:px-14 rounded-[5px] text-white text-[16px] mt-[13px]'>
                                            {
                                                addCouponMutation.isLoading
                                                    ? "Please wait..."
                                                    : "Submit"
                                            }
                                        </Button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>

                </Box>
            </Modal>
            <div className='flex justify-between'>
                <h2 className="text-[#6A707E] text-2xl">Coupon</h2>
                <button className="text-base btn text-white font-medium py-4 px-5 rounded-[5px]" onClick={handleOpen}>Create Coupon</button>
            </div>
            <div className='flex w-full gap-7 mb-7'>
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
            </div>
            <CouponNotificationTable />
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

export default Coupon