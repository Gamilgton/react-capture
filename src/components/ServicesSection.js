import React from 'react';

// Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';


const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>high <span>quality</span> services</h2>

                <div className="cards">

                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus deleniti temporibus commodi voluptate, quis pariatur ut obcaecati! Laboriosam porro dolorem odit neque tempore soluta, ab id. Fugiat, mollitia nostrum?</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="clock"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus deleniti temporibus commodi voluptate, quis pariatur ut obcaecati! Laboriosam porro dolorem odit neque tempore soluta, ab id. Fugiat, mollitia nostrum?</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="clock"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus deleniti temporibus commodi voluptate, quis pariatur ut obcaecati! Laboriosam porro dolorem odit neque tempore soluta, ab id. Fugiat, mollitia nostrum?</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="clock"/>
                            <h3>Afforable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus deleniti temporibus commodi voluptate, quis pariatur ut obcaecati! Laboriosam porro dolorem odit neque tempore soluta, ab id. Fugiat, mollitia nostrum?</p>
                    </div>

                </div>

            </div>

            <div className="image">
                <img src={home2} alt="home2"/>
            </div>

        </div>
    )
}

export default ServicesSection;