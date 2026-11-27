import React from 'react';

export default function Title({ title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-20">
      <h2 className="text-[40px] font-bold font-serif text-savora-black">
        {title}
      </h2>
      <div className="bg-savora-orange w-41 h-1.25 rounded-full"></div>
    </div>
  );
}