"use client";

import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { BsFileEarmark, BsSearch } from "react-icons/bs";
import { utilities } from './utilities';
import Link from 'next/link';

export default function Search() {
    const [query, setQuery] = useState('');

    const filteredItems =
        query === ''
            ? utilities
            : utilities.filter((utility) =>
                utility.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            );

    return (
        <div className=' w-2/5 select-none z-0'>
            <Combobox >
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-300 sm:text-sm flex items-center">
                        <BsSearch className=' text-2xl m-1 ml-2 text-cyan-600' />
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                            displayValue={(utility) => utility.name}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder='Search'
                        />
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredItems.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredItems.map((utility) => (
                                    <Combobox.Option
                                        key={utility.id}
                                        className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 pl-10 pr-4 transition duration-300 ${active ? 'bg-cyan-600 text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={utility}
                                    >
                                        {({ active }) => (
                                            <Link href={utility.link}>
                                                <span
                                                    className=""
                                                >
                                                    {utility.name}
                                                </span>
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 transition duration-300 text-lg ${active ? 'text-white' : 'text-cyan-600'
                                                        }`}
                                                >
                                                    {utility.icon ? utility.icon : <BsFileEarmark />}
                                                </span>
                                            </Link>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
