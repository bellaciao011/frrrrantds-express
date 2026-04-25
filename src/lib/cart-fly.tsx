import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from "react";

interface CartFlyCtx {
  trigger: () => void;
}

const Ctx = createContext<CartFlyCtx>({ trigger: () => {} });

function FlyBall({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const doneCalled = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight - 90;
    const endX = window.innerWidth - 44;
    const endY = 28;
    const dx = endX - startX;
    const dy = endY - startY;

    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;

    const anim = el.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)", opacity: "1" },
        { transform: `translate(calc(-50% + ${dx * 0.4}px), calc(-50% + ${dy * 0.3}px)) scale(0.9)`, opacity: "1", offset: 0.3 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.15)`, opacity: "0" },
      ],
      { duration: 750, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fill: "forwards" }
    );

    anim.onfinish = () => {
      if (!doneCalled.current) {
        doneCalled.current = true;
        onDone();
      }
    };

    return () => anim.cancel();
  }, [onDone]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: "1.1rem",
        height: "1.1rem",
        borderRadius: "50%",
        background: "var(--color-primary, #e11d48)",
        zIndex: 9999,
        pointerEvents: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    />
  );
}

let _id = 0;

export function CartFlyProvider({ children }: { children: ReactNode }) {
  const [balls, setBalls] = useState<number[]>([]);

  const trigger = useCallback(() => {
    const id = ++_id;
    setBalls((prev) => [...prev, id]);
  }, []);

  const removeBall = useCallback((id: number) => {
    setBalls((prev) => prev.filter((b) => b !== id));
  }, []);

  return (
    <Ctx.Provider value={{ trigger }}>
      {children}
      {balls.map((id) => (
        <FlyBall key={id} onDone={() => removeBall(id)} />
      ))}
    </Ctx.Provider>
  );
}

export function useCartFly() {
  return useContext(Ctx);
}
