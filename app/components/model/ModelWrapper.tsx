'use client'

import React, {FC, ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const ModelWrapper: FC<Props> = ({children}): JSX.Element => {
    return (
        <div className='bg-black/80 fixed inset-0 grid place-content-center z-20'>
            {children}
        </div>
    )
}

export default ModelWrapper;