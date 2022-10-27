import React from 'react'
import '../styles/NotFound.css'
import { FButton, ActionRow } from "../styles/components.styled";
import { Link } from "react-router-dom";
import { HiArrowLeft } from 'react-icons/hi2';

const NotFound = () => {
    return (
        <>
            <h1>Page Not Found</h1>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <ActionRow>
                <div className="back">
                    <Link to="/">
                        <FButton><HiArrowLeft /><span>Back Home</span></FButton>
                    </Link>
                </div>
            </ActionRow>



        </>
    )
}

export default NotFound