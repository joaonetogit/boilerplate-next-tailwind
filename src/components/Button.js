// Core
import Link from 'next/link';
import React from 'react';

const Button = ({ href, label }) => {
  return (
    <Link className=" flex w-fit items-center justify-center rounded bg-red-900 px-4 py-2" href={href}>
      {label}
    </Link>
  );
};

export default Button;
