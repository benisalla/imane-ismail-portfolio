import React from "react";
import style from "./style.module.css";
import ParticleImage, { forces, Vector } from "react-particle-image";
import AIimage from "../../../assets/AnimSrc/ismail.png";


const AI = () => {
    return (
        <div className={style.main} style={{ backgroundColor: "#000" }}>
            <ParticleImage
                className="ismail"
                scale={4}
                maxParticles={5000}
                backgroundColor="#000"
                src={AIimage}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
                particleOptions={{
                    mass: () => 40,
                    filter: ({ x, y, image }) => {
                        const pixel = image.get(x, y);
                        return pixel.r === 255;
                    },
                    color: () => "#f4afe0",
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

export default AI;