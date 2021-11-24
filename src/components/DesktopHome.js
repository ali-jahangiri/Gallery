import React, { useState } from 'react';
import Portal  from "../provider/Portal"
import GalleryBox from './GalleryBox';

const UpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M6,6.21a1,1,0,0,0,1.41,0L11,2.58V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V2.59l3.62,3.62a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41L14.13.88a3,3,0,0,0-4.24,0L6,4.8A1,1,0,0,0,6,6.21Z"/></svg>

const DesktopHome = ({ cursorRef , isInHoverOfSomeGalleryItem , setIsInHoverOfSomeGalleryItem , model , currentBodyPos }) => {
    const [oneItemSelected, setOneItemSelected] = useState(false)

    return (
        <React.Fragment>
            <Portal>
                <div ref={cursorRef} style={{ zIndex : oneItemSelected ? 99999 : 0 }} className={`cursor ${isInHoverOfSomeGalleryItem ? "cursor--active" : ""} ${oneItemSelected ? "cursor--selected" : ""}`}>
                    <UpIcon />
                </div>
            </Portal>
            {
                model.map((el , i) => <GalleryBox
                                            setOneItemSelected={setOneItemSelected}
                                            setIsHovered={setIsInHoverOfSomeGalleryItem} 
                                            isSomeOneInHover={isInHoverOfSomeGalleryItem} 
                                            bodyScrollPos={currentBodyPos} 
                                            {...el} 
                                            key={i} />)
            }
        </React.Fragment>
    )
}


export default DesktopHome;