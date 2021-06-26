import React, {useState} from 'react';

const SliderHoc = (Component) => {
    
    const SliderState = () => {
        const [prev, setPrev] = useState(true);
        const [next, setNext] = useState(false);


        return (
            <Component
                prev={prev} onSetPrev={setPrev}
                next={next} onSetNext={setNext}
            
            />
        );
    
    }
    return SliderState;
}

export default SliderHoc