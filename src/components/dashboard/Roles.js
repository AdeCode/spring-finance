import React from 'react'
import styled from 'styled-components'
import alert from '../../images/dashboard/alert.png'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import CheckBox from '../@shared/dashboard/CheckBox'
import RoleData from '../@shared/RoleData'

function Roles() {

    const createRoleMutation = () => { }

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Section className='pr-8'>
            <div className='flex justify-between mb-[14px]'>
                <h2 className="text-[#6A707E] text-2xl mb-4">Roles and Permission</h2>
                <button className='rounded-[5px] btn text-white text-sm font-medium py-3 px-9'>Add Role</button>
            </div>
            <div className='info py-3 pl-5 flex flex-col gap-2 mb-10'>
                <div className='flex gap-3'>
                    <div className='flex items-center'>
                        <img src={alert} alt='alert' />
                    </div>
                    <h3 className='font-semibole text-xs text-[#002333] opacity-80'>Owner can view and edit acess to user  management by default which cannot be changed. </h3>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center'>
                        <img src={alert} alt='alert' />
                    </div>
                    <h3 className='font-semibole text-xs text-[#002333] opacity-80'>Every member gets basic permissions and functionality by default. You can customize settings for all Members or make local adjustment for individuals user see their profiles.</h3>
                </div>
            </div>
            <div className=''>
                <Formik
                    initialValues={{
                        ownerPermissions: [],
                        adminPermissions: [],
                        driverPermissions: [],
                        salesRepPermissions: [],
                        itStaffPermisions: [],
                        supervisorPermissions: [],
                        callCenterPermissions: [],
                        auditorPermissions: [],
                    }}
                    validationSchema={
                        Yup.object({
                            // email: Yup.string()
                            //     .email("Invalid email address")
                            //     .required("email field can not be empty"),
                            // password: Yup.string()
                            //     .required("password field not be empty")
                            //     .min(6, "password be at least 11 characters"),

                        })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false)
                        onSubmit(values)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col w-full'>
                            <div className='flex flex-col'>
                                <div className='flex flex-wrap'>
                                        {
                                            RoleData.map(role => {
                                                return (
                                                    <div key={role.id} className='w-[250px] mb-7'>
                                                        <h3 className='font-semibold text-[#0E1F30] text-base mb-[6px]'>{role.name}: </h3>
                                                        <p className='text-[#0E1F30] opacity-40 font-medium text-xs mb-3'>General access and all rights below</p>
                                                        <div className="flex flex-col gap-2">
                                                            <CheckBox
                                                                name='companyAdmin'
                                                                value='Company Admin'
                                                                label='Company Admin'
                                                            />
                                                            <CheckBox
                                                                name='createBranch'
                                                                value='createBranch'
                                                                label='Create Branch'
                                                            />
                                                            <CheckBox
                                                                name='addNewStaff'
                                                                value='addNewStaff'
                                                                label='Add new staff'
                                                            />
                                                            <CheckBox
                                                                name='reassignStaff'
                                                                value='reassignStaff'
                                                                label='Reassign staff'
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                </div>
                            </div>
                            {/* <div className=''>
                                <div className=''>
                                    <div className='flex justify-between w-full'>
                                        <CheckBox
                                            name='ownerPermission'
                                            value='addNewStaff'
                                            label='Add new staff'
                                        />

                                    </div>
                                </div>
                            </div> */}
                            <div className="flex w-full lg:justify-end">
                                <Button type="submit" disabled={isSubmitting} className='py-[11px] w-fit lg:px-14 rounded-[5px] text-white text-[16px] mt-[13px]'>
                                    {
                                        createRoleMutation.isLoading
                                            ? "Please wait..."
                                            : "Submit"
                                    }
                                </Button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>

        </Section>
    )
}

const Section = styled.section`
    .btn{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
    }

    .info{
        background: rgba(253, 137, 0, 0.1);
    }
`

const Button = styled.button`

`

export default Roles