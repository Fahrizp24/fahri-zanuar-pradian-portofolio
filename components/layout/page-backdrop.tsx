import type { ReactNode } from "react";

import { ShaderFlowLazy } from "../shaders/shader-flow-lazy";

export function PageBackdrop(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-225 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50 md:opacity-100">
        <ShaderFlowLazy brightness={3} iterations={10} flowSpeed={[0, 0.1]} />
      </div>
    </div>
  );
}
