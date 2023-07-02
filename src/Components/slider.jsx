import React, { useRef, useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Card from "./card"


const cards = [
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Whats_App_Image_2023_04_08_at_18_53_56_Nethravathi_T_e852eda145.jpg",
        name: "Taniya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg",
        name: "Nrupul",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
        name: "Yogesh",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/1607664449183_1_f46467a88b.jpg",
        name: "Rajat",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        name: "Taniya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/1607664449183_1_f46467a88b.jpg",
        name: "Albert",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aishwarya_photo_7172049e86.jpg",
        name: "Aishwarya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/29716560_426544924457437_9063706992698195968_n_removebg_preview_1_Pulkit_Tyagi_ae57feb392.png",
        name: "Pulkit",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Profile_pic_1ed8391a4a8895728020_Tanya_Kumar_1_986b7ff3c9.jpeg",
        name: "Tanya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/IMG_20220423_214713_Bicky_Dutta_7b075ef371.jpg",
        name: "Bickey",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Whats_App_Image_2023_04_08_at_18_53_56_Nethravathi_T_e852eda145.jpg",
        name: "Taniya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg",
        name: "Nrupul",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
        name: "Yogesh",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/1607664449183_1_f46467a88b.jpg",
        name: "Rajat",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        name: "Taniya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/1607664449183_1_f46467a88b.jpg",
        name: "Albert",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aishwarya_photo_7172049e86.jpg",
        name: "Aishwarya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/29716560_426544924457437_9063706992698195968_n_removebg_preview_1_Pulkit_Tyagi_ae57feb392.png",
        name: "Pulkit",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Profile_pic_1ed8391a4a8895728020_Tanya_Kumar_1_986b7ff3c9.jpeg",
        name: "Tanya",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    },
    {
        image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/IMG_20220423_214713_Bicky_Dutta_7b075ef371.jpg",
        name: "Bickey",
        company: "Masai School",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, soluta.'
    }
]

const Slider = () => {
    const carouselRef = useRef(null)

    const prevButton = () => {
        const carousel = carouselRef.current;
        if (carousel && carousel.clientWidth) {
            const width = carousel.clientWidth;
            carousel.scrollLeft = carousel.scrollLeft - width;
        }
    }

    const nextButton = () => {
        const carousel = carouselRef.current;
        if (carousel && carousel.clientWidth) {
            const width = carousel.clientWidth;
            carousel.scrollLeft = carousel.scrollLeft + width;
        }
    }
    return (
        <div class='h-150 flex relative overflow-hidden box-border '>
            <div onClick={prevButton} class='w-1/12 h-full flex items-center relative'>
                <BiLeftArrowAlt class='w-8 h-8 absolute right-0 bg-transparent' />
            </div>
            <div ref={carouselRef} className='slider' class='w-10/12 h-full flex overflow-hidden  box-content gap-1 scroll-smooth bg-white'>
                {
                    cards.map((el, i) => <Card key={i} name={el.name} image={el.image} company={el.company} description={el.description} />)
                }
            </div>
            <div onClick={nextButton} class='w-1/12 h-full flex items-center relative'>
                <BiRightArrowAlt class='w-8 h-8  absolute left-0 bg-transparent box-border' />
            </div>
        </div>
    )
}

export default Slider