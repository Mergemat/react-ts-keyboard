import { FuncKeyEnum } from './Keyboard.types';
import FuncKey from './components/FuncKey';
import SymKey from './components/SymKey';

const symsToArray = (syms: string) => {
  return syms
    .split('')
    .map((sym) => ({ component: SymKey, props: { fkey: { key: sym } } }));
};

export const allFuncKeys: string[] = Object.values(FuncKeyEnum);

export const RUkeys = [
  [
    ...symsToArray('ё1234567890-='),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.BACKSPACE, width: 124 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.TAB, width: 84 } },
    },
    ...symsToArray('йцукенгшщзхъ'),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.BACKSLASH, width: 96 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.CAPSLOCK, width: 115 } },
    },
    ...symsToArray('фывапролджэ'),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.ENTER, width: 129 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.SHIFT, width: 155 } },
    },
    ...symsToArray('ячсмитьбю.'),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.SHIFT, width: 152 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.CTRL, width: 90 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.META, width: 64 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.ALT, width: 90 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.SPACEBAR, width: 391 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.ALT, width: 90 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.META, width: 64 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.CTRL, width: 118 } },
    },
  ],
];
export const ENkeys = [
  [
    ...symsToArray('§1234567890-='),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.BACKSPACE, width: 124 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.TAB, width: 84 } },
    },
    ...symsToArray('qwertyuiop[]'),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.BACKSLASH, width: 96 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.CAPSLOCK, width: 115 } },
    },
    ...symsToArray("asdfghjkl;'"),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.ENTER, width: 129 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.SHIFT, width: 155 } },
    },
    ...symsToArray('zxcvbnm,./'),
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.SHIFT, width: 152 } },
    },
  ],
  [
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.CTRL, width: 90 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.META, width: 64 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.ALT, width: 90 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.SPACEBAR, width: 391 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.ALT, width: 90 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.META, width: 64 } },
    },
    {
      component: FuncKey,
      props: { fkey: { key: FuncKeyEnum.CTRL, width: 118 } },
    },
  ],
];
