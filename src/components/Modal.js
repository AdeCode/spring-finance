import React from 'react'
import styled from 'styled-components'


function Modal({ title, subTitle, closeModal, children}) {
    return (
        <ModalContainer className='pt-16 lg:py-[60px]'>
            <div className='modal flex w-full px-8 lg:w-[40%] z-10 bg-background h-fit lg:h-fit flex-col items-center lg:px-[20px] py-[20px]'>
                <div className='flex justify-end w-full'>
                    <button className='flex font-bold py-1' onClick={closeModal}>X</button>
                </div>
                <div className='lg:w-[400px]'>
                    <div className='title py-3'>
                        <h1 className='lg:text-[30px] text-xl font-bold leading-[45px] tracking-[0.4px]'>{title}</h1>
                        <h3 className='font-normal text-base lg:text-lg'>{subTitle}</h3>
                    </div>
                    <div className='body'>
                        {children}
                    </div>
                    <div className='footer'></div>
                </div>
            </div>
        </ModalContainer>
    )
}


export default Modal

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top:0;
    left:0;
    display: flex;
    justify-content: center;

    .title{
        h3{
            color: rgba(38, 50, 56, 0.76);
        }        
    }
    .body{

        
    }

`