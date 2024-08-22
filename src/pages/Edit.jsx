import React, { useState,createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import Text from "../components/Text";
import{exportComponentAsJPEG} from "react-component-export-image";
const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef=createRef()
    const addText = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div style={{width:"600px",border:"1px solid"}} ref={memeRef}className="meme">
                <img 
                    src={params.get("url")} 
                    width="250px" 
                    style={{ marginBottom: "15px" }} 
                    alt="Meme" 
                />
                {
                    Array.from({ length: count }, (_, index) => (
                        <Text key={index} />
                    ))
                }
            </div>
            <Button onClick={addText}>Add Text</Button>
            <Button variant="success" style={{ marginLeft: "15px" }} onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</Button>
        </div>
    );
};

export default EditPage;
