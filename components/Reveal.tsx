'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Reveal({children, className=''}:{children:React.ReactNode; className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!ref.current)return; gsap.fromTo(ref.current,{y:55,opacity:0},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 84%',once:true}})},[]);
 return <div ref={ref} className={className}>{children}</div>;
}
