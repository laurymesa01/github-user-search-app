import { waveform } from 'ldrs'
import React from 'react';

// waveform.register()

export default function Loader() {

    React.useEffect(() => {
        import("ldrs/waveform");
      });
    return (
        <div className='text-center mt-24'>
            <l-waveform
                size="35"
                stroke="3.5"
                speed="1"
                color="black" 
            ></l-waveform>
        </div>

    )
}