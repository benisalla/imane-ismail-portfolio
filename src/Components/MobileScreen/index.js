import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MobileScreen = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
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
                            quantity: 5,
                        },
                        repulse: {
                            distance: 160,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#647BFF",
                    },
                    links: {
                        color: "#647BFF88",
                        distance: 100,
                        enable: true,
                        opacity: 0.7,
                        width: 1.1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 700,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 6 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default MobileScreen;