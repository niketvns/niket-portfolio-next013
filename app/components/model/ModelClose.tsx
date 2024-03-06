import React, {FC, ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const ModelClose: FC<Props> = ({children}): JSX.Element => {
    return (
        <div className='absolute right-2 top-2 cursor-pointer text-black text-2xl hover:scale-125 transition-all duration-150 ease-in-out'>
            {children}
        </div>
    )
}

export default ModelClose;