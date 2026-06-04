import { useEffect, useRef } from 'react';

type Direction = 'right' | 'left' | 'up' | 'down' | 'diagonal';

type SquaresBackgroundProps = {
  readonly className?: string;
  readonly direction?: Direction;
  readonly speed?: number;
  readonly squareSize?: number;
  readonly borderColor?: string;
  readonly highlightColor?: string;
};

type DrawGridOptions = {
  readonly context: CanvasRenderingContext2D;
  readonly canvas: HTMLCanvasElement;
  readonly squareSize: number;
  readonly borderColor: string;
  readonly highlightColor: string;
  readonly gridOffset: { x: number; y: number };
  readonly hoveredSquare: { x: number; y: number } | null;
};

const MIN_SPEED = 0.05;

export function SquaresBackground({
  className,
  direction = 'diagonal',
  speed = 0.18,
  squareSize = 48,
  borderColor = 'rgba(255, 255, 255, 0.12)',
  highlightColor = 'rgba(255, 255, 255, 0.045)',
}: SquaresBackgroundProps): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const gridOffsetRef = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const resizeCanvas = (): void => {
      const { width, height } = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawGrid({
        context,
        canvas,
        squareSize,
        borderColor,
        highlightColor,
        gridOffset: gridOffsetRef.current,
        hoveredSquare: hoveredSquareRef.current,
      });
    };

    const updateGridOffset = (): void => {
      const effectiveSpeed = Math.max(speed, MIN_SPEED);

      if (direction === 'right' || direction === 'diagonal') {
        gridOffsetRef.current.x = (gridOffsetRef.current.x - effectiveSpeed + squareSize) % squareSize;
      }

      if (direction === 'left') {
        gridOffsetRef.current.x = (gridOffsetRef.current.x + effectiveSpeed + squareSize) % squareSize;
      }

      if (direction === 'down' || direction === 'diagonal') {
        gridOffsetRef.current.y = (gridOffsetRef.current.y - effectiveSpeed + squareSize) % squareSize;
      }

      if (direction === 'up') {
        gridOffsetRef.current.y = (gridOffsetRef.current.y + effectiveSpeed + squareSize) % squareSize;
      }
    };

    const animate = (): void => {
      if (prefersReducedMotion.matches) {
        drawGrid({
          context,
          canvas,
          squareSize,
          borderColor,
          highlightColor,
          gridOffset: gridOffsetRef.current,
          hoveredSquare: hoveredSquareRef.current,
        });
        frameRef.current = null;

        return;
      }

      updateGridOffset();
      drawGrid({
        context,
        canvas,
        squareSize,
        borderColor,
        highlightColor,
        gridOffset: gridOffsetRef.current,
        hoveredSquare: hoveredSquareRef.current,
      });
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      hoveredSquareRef.current = {
        x: Math.floor((mouseX + gridOffsetRef.current.x) / squareSize),
        y: Math.floor((mouseY + gridOffsetRef.current.y) / squareSize),
      };
    };

    const handleMouseLeave = (): void => {
      hoveredSquareRef.current = null;
    };

    resizeCanvas();
    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [borderColor, direction, highlightColor, speed, squareSize]);

  return <canvas className={className} ref={canvasRef} />;
}

function drawGrid({
  context,
  canvas,
  squareSize,
  borderColor,
  highlightColor,
  gridOffset,
  hoveredSquare,
}: DrawGridOptions): void {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const offsetX = gridOffset.x % squareSize;
  const offsetY = gridOffset.y % squareSize;

  context.clearRect(0, 0, width, height);
  context.lineWidth = 0.8;
  context.strokeStyle = borderColor;

  for (let x = -squareSize; x < width + squareSize; x += squareSize) {
    for (let y = -squareSize; y < height + squareSize; y += squareSize) {
      const squareX = x - offsetX;
      const squareY = y - offsetY;
      const squareIndexX = Math.floor((squareX + offsetX) / squareSize);
      const squareIndexY = Math.floor((squareY + offsetY) / squareSize);

      if (hoveredSquare?.x === squareIndexX && hoveredSquare.y === squareIndexY) {
        context.fillStyle = highlightColor;
        context.fillRect(squareX, squareY, squareSize, squareSize);
      }

      context.strokeRect(squareX, squareY, squareSize, squareSize);
    }
  }
}
