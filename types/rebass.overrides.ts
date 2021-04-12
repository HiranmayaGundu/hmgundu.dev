import type { CSSProp } from "styled-components";
import {
  BoxProps as BoxP,
  ButtonProps as ButtonP,
  FlexProps as FlexP,
  LinkProps as LinkP,
  TextProps as TextP,
} from "rebass";
declare module "rebass" {
  interface FlexProps extends FlexP {
    as?: React.ElementType;
    css?: CSSProp;
  }
  interface BoxProps extends BoxP {
    as?: React.ElementType;
    css?: CSSProp;
  }
  interface TextProps extends TextP {
    as?: React.ElementType;
    css?: CSSProp;
  }
  interface LinkProps extends LinkP {
    as?: React.ElementType;
    css?: CSSProp;
  }
  interface ButtonProps extends ButtonP {
    css?: CSSProp;
  }
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
