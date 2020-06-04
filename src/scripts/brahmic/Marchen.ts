import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const MarchenScheme: IScriptScheme = {
    vowels: ['𑲏', '𑲏𑲰', '𑲏𑲱', '𑲏𑲱𑲰', '𑲏𑲲', '𑲏𑲲𑲰', '𑲊𑲱', '𑲊𑲱𑲰', '𑲋𑲱', '𑲋𑲱𑲰', '𑲏𑲳', '𑲏𑲳𑲰', '𑲏𑲴', '𑲏𑲰𑲴', 'ऎ', 'ऒ'],
    marks: ['𑲰', '𑲱', '𑲱𑲰', '𑲲', '𑲲𑲰', '𑲪𑲱', '𑲪𑲱𑲰', '𑲫𑲱', '𑲫𑲱𑲰', '𑲳', '𑲳𑲰', '𑲴', '𑲰𑲴', '', ''],
    virama: s(''),
    yogavaahas: ['𑲵', '𑲎', '𑲶', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑱲 𑱳 𑱴 𑱴𑲮 𑱵
        𑲂 𑲃 𑲄 𑲄𑲮 𑱹
        𑱺 𑱻 𑱼 𑱼𑲮 𑱽
        𑱺 𑱻 𑱼 𑱼𑲮 𑱽
        𑱾 𑱿 𑲀 𑲀𑲮 𑲁
        𑲉 𑲊 𑲋 𑲅
        𑲌 𑲌 𑲍 𑲎
        𑲋 𑱲𑲌 𑲄𑱹
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑲏𑲴𑲶 ऽ । ॥
        ༠ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩
    `),
};


export const Marchen = new BrahmicScriptDefinition({
    name: BrahmicScript.MARCHEN,
    isRoman: false,
    scheme: MarchenScheme,
});
