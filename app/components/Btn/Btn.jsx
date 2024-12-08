'use client';
import Link from 'next/link';

export default function Btn() {
    return (
        <Link href={""} className="read-more-btn flex items-center gap-5 pb-9">
            <span>Read More</span>
            <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.76 8.25"
                aria-hidden="true"
                focusable="false"
            >
                <defs>
                    <style>
                        {`.arc-1 { fill: none; stroke: #515962; stroke-miterlimit: 10; stroke-width: 0.25px; }`}
                    </style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <line
                            className="arc-1"
                            y1="4.12"
                            x2="12.14"
                            y2="4.12"
                        ></line>
                        <polyline
                            className="arc-1"
                            points="10.93 2.92 12.14 4.13 10.93 5.33"
                        ></polyline>
                        <path
                            className="arc-1 circle-path"
                            d="M7.81,1.3A4,4,0,1,1,7.81,7"
                        ></path>
                    </g>
                </g>
            </svg>
        </Link>
    );
}