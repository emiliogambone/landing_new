"use client";

import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function ParticlesInit({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ParticlesProvider init={particlesInit}>{children}</ParticlesProvider>;
}
