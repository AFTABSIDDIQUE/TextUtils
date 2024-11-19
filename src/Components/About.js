import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black',border:props.mode==='dark'?'3px solid white':''}}>
      <h2>About Us</h2>
      <p>Welcome to TextUtils, your one-stop solution for all text manipulation needs!

        At TextUtils, we understand the importance of clean, efficient, and tailored text for your personal and professional use. Whether you're editing, formatting, or analyzing text, our intuitive tools are designed to save you time and boost productivity.
        <br/>
        <br/>
        <b>What We Offer:</b>
        <br/>
        <b>Text Transformations:</b> Convert text to uppercase, lowercase, or capitalize words effortlessly.
        <br/>
        <b>Character & Word Count:</b> Quickly analyze the length and structure of your text.
        <br/>
        <b>Whitespace Removal:</b> Optimize your text by trimming unnecessary spaces.
        <br/>
        <b>Custom Features:</b> Need something unique? We provide customizable options to suit your specific requirements.
        <br/>
        <br/>
        <b>Why Choose TextUtils?</b>
        <br/>
        <b>User-Friendly:</b> Simple, clean, and responsive design that works seamlessly on all devices.
        <br/>
        <b>Fast & Reliable:</b> Experience instant processing for all your text-related tasks.
        <br/>
        <b>Free to Use:</b> Enjoy all features at no cost.</p>
    </div>
  )
}
