'use client'
import React from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'

interface ListSelectProps {
    options: any;
    selected: any;
    onChange: any;
}

const ListSelect:React.FC<ListSelectProps> = ({ options, selected, onChange }) => {
    return (
        <Listbox value={selected} onChange={onChange}>
            <ListboxButton className='py-0.5 px-1 rounded-sm cursor-pointer min-w-[120px] flex items-center justify-between text-base bg-primary text-white'>
                {selected.name}<FontAwesomeIcon icon={faCaretDown} />
            </ListboxButton>
            <ListboxOptions className='shadow-2xl rounded-sm bg-white min-w-[200px]' anchor="bottom">
            {options.map((option) => (
                <ListboxOption key={option.id} value={option} 
                className="data-[focus]:bg-thirdary data-[focus]:text-white cursor-pointer p-2 group flex items-center justify-between text-base">
                    {option.name}
                    <FontAwesomeIcon className="invisible size-5 group-data-[selected]:visible" icon={faCheck} />
                </ListboxOption>
            ))}
            </ListboxOptions>
        </Listbox>
    )
}

export default ListSelect