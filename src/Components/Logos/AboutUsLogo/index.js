import React from "react";
import style from "./style.module.css";
import ParticleImage, { forces, Vector } from "react-particle-image";
import ImgTarget from "../../../assets/AnimSrc/about-us.png";


const AboutUsLogo = () => {
    return (
        <div className={style.main}>
            <ParticleImage
                scale={0.9}
                maxParticles={5000}
                backgroundColor="#0000"
                src={ImgTarget}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
                particleOptions={{
                    mass: () => 40,
                    filter: ({ x, y, image }) => {
                        const pixel = image.get(x, y);
                        return pixel.r === 255;
                    },
                    color: () => "#000",
                    friction: () => 0.15,
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

export default AboutUsLogo;