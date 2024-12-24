import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei';
import { useParams, useNavigate } from 'react-router-dom';
import { easing } from 'maath';
import getUuid from 'uuid-by-string';

const GOLDENRATIO = 1.61803398875;

export const WorkGallery: React.FC<{ images: Array<{ url: string }> }> = ({ images }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <color attach="background" args={['#000']} />
    <fog attach="fog" args={['#191920', 0, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 300]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          mirror={0.8}
        />
      </mesh>
    </group>
    <Environment files="/potsdamer_platz_1k.hdr" />
  </Canvas>
);

interface FramesProps {
  images: Array<{ url: string }>;
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }: FramesProps) {
  const ref = useRef<THREE.Group>(null);
  const clickedFrame = useRef<THREE.Object3D | null>(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 550);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  useEffect(() => {
    p.set(0, 0.15, isMobile ? 5.5: 4.7);
    q.identity();
  },[p,q]);

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedObject = e.object;

        if (clickedObject && clickedObject.name) {
          // Store clicked frame and trigger camera position change
          clickedFrame.current = clickedObject;

          // Calculate the camera position relative to the clicked frame
          clickedFrame.current.updateWorldMatrix(true, true);
          const zOffset = isMobile ? 55 : 25;
          clickedFrame.current.localToWorld(p.set(0, -0.05, zOffset)); // Adjust this distance if needed
          clickedFrame.current.getWorldQuaternion(q);
        }
      }}

      onPointerMissed={() => {
        // Reset the camera position when clicking outside a frame
        p.set(0, 0.15, isMobile ? 5.5 : 4.7);
        q.identity();
      }}

      onDoubleClick={(e) => {
        e.stopPropagation();
        const clickedObject = e.object;
        if (clickedObject && clickedObject.name) {
          navigate(`/our-work/case-study/${clickedObject.name}`);
        }
      }}
    >
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  );
}

interface FrameProps {
  url: string;
  c?: THREE.Color;
  [key: string]: any;
}

function Frame({ url,id,text, c = new THREE.Color(), ...props }: FrameProps) {
  const image = useRef<any>(null);
  const frame = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = id;
  useCursor(hovered);

  useFrame((state, dt) => {
    if (image.current) {
      image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
      easing.damp3(image.current.scale, [0.85 * (hovered ? 0.85 : 1), 0.9 * (hovered ? 0.905 : 1), 1], 0.1, dt);
    }
    if (frame.current) {
      easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt);
    }
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.045}>
        {text}
      </Text>
    </group>
  );
}
