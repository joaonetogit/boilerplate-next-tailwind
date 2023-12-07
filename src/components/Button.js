// Core
import React from 'react';
import Link from 'next/link';

export default function Footer({ href, label }) {
  return (
    <Link className=" flex w-fit items-center justify-center rounded bg-red-900 px-4 py-2" href={href}>
      {label}
    </Link>
  );
}
