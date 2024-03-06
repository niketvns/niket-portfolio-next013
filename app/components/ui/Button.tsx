import React, {FC, ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const Button: FC<Props> = ({children}): JSX.Element => {
    return (
        <button className='flex items-center gap-2 bg-highlight text-white/80 p-2 rounded text-sm'>
            {children}
        </button>
    )
}

export default Button;