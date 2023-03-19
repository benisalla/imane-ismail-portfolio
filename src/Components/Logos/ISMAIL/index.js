import React from "react";
import style from "./style.module.css";
import ParticleImage, { forces, Vector } from "react-particle-image";
import ImgTarget from "../../../assets/AnimSrc/ismail-png.png";
import { useMediaQuery } from "@mui/material";


const ISMAIL = () => {

    const isMobile = useMediaQuery('(min-width:768px)');

    const scale = !isMobile ? "1" : "1.3";

    return (
        <div className={style.main} style={{ backgroundColor: "#0000" }}>
            <ParticleImage
                scale={scale}
                maxParticles={1400}
                backgroundColor="#0000"
                entropy={10}
                src={ImgTarget}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 5)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 5)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 40)}
                particleOptions={{
                    mass: () => 40,
                    filter: ({ x, y, image }) => {
                        const pixel = image.get(x, y);
                        return pixel.r === 255;
                    },
                    color: () => "#647bff",
                    friction: () => 0.25,
                    initialPosition: ({ canvasDimensions }) => {
                        return new Vector(
                            canvasDimensions.width / 9,
                            canvasDimensions.height / 2
                        );
                    }
                }}
            />
        </div>
    );
};

export default ISMAIL;