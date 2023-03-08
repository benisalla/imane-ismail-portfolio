import React from "react";
import style from "./style.module.css";
import ParticleImage, { forces, Vector } from "react-particle-image";
import ImgTarget from "../../../assets/AnimSrc/find-us.png";
import { useMediaQuery } from "@mui/material";


const FindUsLogo = () => {

    const isMobile = useMediaQuery('(min-width:768px)');

    return (
        <div className={style.main}>
            <ParticleImage
                scale={0.8}
                maxParticles={2500}
                backgroundColor="#0000"
                entropy={4}
                src={ImgTarget}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 5)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 5)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 40)}
                particleOptions={{
                    mass: () => 13,
                    filter: ({ x, y, image }) => {
                        const pixel = image.get(x, y);
                        return pixel.r === 255;
                    },
                    color: () => !isMobile ? "#647bff": "#000",
                    friction: () => 0.16,
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

export default FindUsLogo;