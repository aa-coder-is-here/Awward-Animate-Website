"use client";
import { useEffect, useRef, useState } from "react";

const SplineWrapper = ({ scene }) => {
  const containerRef = useRef(null);
  const [SplineComponent, setSplineComponent] = useState(null);

  useEffect(() => {
    const loadSpline = async () => {
      const mod = await import("@splinetool/react-spline");
      setSplineComponent(() => mod.default); // default export
    };
    loadSpline();
  }, []);

  if (!SplineComponent) return <div>Loading 3D...</div>;

  return (
    <div ref={containerRef} className="w-full h-full">
      <SplineComponent scene={scene} />
    </div>
  );
};

export default SplineWrapper;
