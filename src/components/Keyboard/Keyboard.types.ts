export enum FuncKeyEnum {
  TAB = 'Tab',
  CAPSLOCK = 'CapsLock',
  SHIFT = 'Shift',
  BACKSPACE = 'Backspace',
  ENTER = 'Enter',
  BACKSLASH = '\\',
  CTRL = "control",
  META = "meta",
  ALT = "Alt",
  SPACEBAR = " "
}

export type TFuncKey = {
  key: FuncKeyEnum;
  width: number;
};

export type SymKeyProp = {
  component: any;
  props: {
    fkey: { key: string };
  };
};

export type FuncKeyProp = {
  component: any;
  props: {
    fkey: TFuncKey;
  };
};
