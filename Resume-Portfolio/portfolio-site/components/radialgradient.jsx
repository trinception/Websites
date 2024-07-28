'use client'
import React, { useEffect, useState } from 'react'

const RadialGradient = () => {

  const[mousePosition, setMousePosition]= React.useState({x:50,y:50})

  useEffect(()=>{

    const handleMouseMove = (event) => {

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      setMousePosition({x:mouseXpercentage,y:mouseYpercentage})
    }

    document.addEventListener('mousemove', handleMouseMove)

    return() =>{
        document.removeEventListener('mousemove', handleMouseMove)
      }

  },[])

  const gradient = {
    backgroundImage : 'radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))',
    position:'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%'
  }


  return(
    <div style={gradient}>

    </div>
  )
}

export default RadialGradient
