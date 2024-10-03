import { OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function SparklesBG() {
  return (
    <div className="h-full w-full absolute">
      <Canvas>
        <PerspectiveCamera makeDefault fov={80} position={[0, 5, 3]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />

        <Sparkles
          count={400}
          scale={10}
          size={1.5}
          speed={1}
          color={0xd79ffc}
        />
      </Canvas>
    </div>
  );
}
