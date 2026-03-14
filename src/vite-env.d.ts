/// <reference types="vite/client" />

declare module "gsap-trial/ScrollSmoother" {
  const ScrollSmoother: any;
  export default ScrollSmoother;
  export { ScrollSmoother };
}

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: Element | string | (string | Element)[] | null,
      vars?: object
    );
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    split(vars?: object): this;
    revert(): void;
  }
}
