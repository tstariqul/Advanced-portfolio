import "./App.css";
import React, { useEffect, useState } from 'react'
import Home from "./components/home/index";
import Mouse from "./components/mouse";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import GoToTop from './components/GoToTop';
import SoundBar from '../src/components/common/SoundBar';
import AnchorComponent from '../src/components/common/Anchor'

const App = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
 
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <AnchorComponent number={numbers} />
            <SoundBar />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 150,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#0f0303",
                        },
                        links: {
                            color: "#951D25",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Mouse />
            <Home />
            <GoToTop />

        </>
    );
}

export default App;
