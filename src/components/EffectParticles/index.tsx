import { ReactNode, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import styled from "styled-components";

const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -5;

`

interface ParticlesEffectTypes{
    children: ReactNode
}

const EffectParticles: React.FC<ParticlesEffectTypes> = ({children}) =>{

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
    
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container: Container | undefined) => {
          await console.log(container);
      }, []);

    return(<>
            <Background>

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: false,
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                          
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
                                value: "#bc13fe",
                            },
                            links: {
                                color: "#bc13fe",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
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
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 3000,
                                },
                                value: 80,
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
                
                
            </Background>
            {children}
    </>
)}

export default EffectParticles