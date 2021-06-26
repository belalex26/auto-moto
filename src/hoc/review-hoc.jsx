import React, {useState} from 'react';

const ReviewHoc = (Component) => {
    
    const ReviewState = () => {
        const [modalActive, setModalActive] = useState(false);


        return (
            <Component modalActive={modalActive} onModalActive={setModalActive}/>
        );
    
    }
    return ReviewState;
}

export default ReviewHoc