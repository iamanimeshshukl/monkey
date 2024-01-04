import React from 'react'

export default function Example() {
    return (
      <video className="m-auto p-auto h-full w-[90vw] rounded-lg" controls autoPlay>
        <source src="/monkey.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
