import React, {FC} from 'react'

type Props = {
    [key: string]: string;
}

const Textarea: FC<Props> = (props): JSX.Element => {
    return (
        <textarea
            className='border border-black/50 text-black py-2 px-3 rounded'
            {...props}
            cols={30}
            rows={4}
        >
        </textarea>
    )
}

export default Textarea;