/* eslint-disable no-unused-vars */
import React, { Suspense, useLayoutEffect, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

const Model = () => {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a * 0.3;
  });

  const model = useGLTF("/iphone.glb");
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to(myMesh.current.rotation, {
      duration: 1,
      y: 1,
      repeat: -1,
      ease: "power2.out",
    });
  });

  useEffect(() => {
    // Fonction pour ajuster les propriétés des matériaux sauf pour l'écran
    const adjustMaterialProperties = (node) => {
      if (node.isMesh && node.material) {
        if (node.name == "Object_40") {
          node.material.roughness = 1; // Rend le matériau plus mat
          node.material.metalness = 0; // Supprime les propriétés métalliques
        }
      }
      if (node.children) {
        node.children.forEach((child) => adjustMaterialProperties(child));
      }
    };

    // Ajuster les propriétés des matériaux pour le modèle
    adjustMaterialProperties(model.scene);
  }, [model]);

  return <primitive ref={myMesh} object={model.scene} />;
};

const Experience = () => {
  const model = React.useRef();

  return (
    <Canvas
      ref={model}
      camera={{ position: [-50, -20, -20], fov: 5, zoom: 0.9 }}
    >
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Stage>
          <Model />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default Experience;
