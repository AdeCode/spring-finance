import React, { useState } from 'react'
import styled from 'styled-components'


function Modal({ title, closeModal, children}) {
    return (
        <ModalContainer className='pt-16 lg:pt-[30px]'>
            <div className='modal flex w-full px-6 lg:w-[50%] bg-white h-[500px] flex-col items-center lg:px-[20px] py-[5px]'>
                <div className='flex justify-end w-full'>
                    <button className='flex border border-gray-600 px-5 py-1' onClick={closeModal}>X</button>
                </div>
                <div className='title py-3 font-semibold text-3xl'>
                    <h1>{title}</h1>
                </div>
                <div className='body'>
                    {children}
                </div>
                <div className='footer'></div>
            </div>
        </ModalContainer>
    )
}


export default Modal

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(200, 200, 200);
    position: absolute;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    .body{

    }

`