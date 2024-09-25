declare module 'aos' {
  interface AosOptions {
    duration?: number;
    delay?: number;
    once?: boolean;
    easing?: string;
    offset?: number;
    anchorPlacement?: string;
  }

  interface AOS {
    init(options?: AosOptions): void;
    refresh(): void;
  }

  const AOS: AOS;
  export default AOS;
}
