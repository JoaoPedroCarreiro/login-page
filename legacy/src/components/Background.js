import { useCallback } from "react"

import { loadFull } from "tsparticles"

import Particles from "react-tsparticles"

function Background() {
    const init = useCallback(async engine => {
        await loadFull(engine)
    }, [])

    const amountOfParticles = 250

    return (
        <Particles init={init} options={{
            fpsLimit: 24,
            particles: {
                groups: {
                    small: {
                        number: { value: .45 * amountOfParticles },
                        zIndex: { value: 60 }
                    },
                    medium: {
                        number: { value: .35 * amountOfParticles },
                        zIndex: { value: 40 }
                    }, 
                    big: {
                        number: { value: .25 * amountOfParticles },
                        zIndex: { value: 25 }
                    }
                },
                color: {
                    value: "#ffffff",
                },
                number: {
                    value: amountOfParticles,
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: .2,
                        startValue: "random",
                        speed: 2
                    },
                    value: 1,
                },
                size: {
                    value: 2,
                },
                move: {
                    enable: true,
                    direction: "right",
                    speed: 1,
                    straight: true
                }
            }
        }}/>
    )
}

export default Background