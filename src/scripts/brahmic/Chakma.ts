import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ChakmaScheme: IScriptScheme = {
    vowels: ['𑄃𑄧', '𑄃', '𑄃𑄨', '𑄃𑄩', '𑄃𑄪', '𑄃𑄫', '𑄢𑄪', '𑄢𑄫', '𑄣𑄪', '𑄣𑄫', '𑄃𑄬', '𑄃𑄭', '𑄃𑄮', '𑄃𑄯', '𑄃𑄬', '𑄃𑄮'],
    marks: ['', '𑄨', '𑄩', '𑄪', '𑄫', '𑄳𑄢𑄪', '𑄳𑄢𑄫', '𑄳𑄣𑄪', '𑄳𑄣𑄫', '𑄬', '𑄭', '𑄮', '𑄯', '𑄬', '𑄮'],
    virama: s('𑄴'),
    yogavaahas: ['𑄁', '𑄂', '𑄀', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑄇𑄧 𑄈𑄧 𑄉𑄧 𑄊𑄧 𑄋𑄧
        𑄌𑄧 𑄍𑄧 𑄎𑄧 𑄏𑄧 𑄐𑄧
        𑄑𑄧 𑄒𑄧 𑄓𑄧 𑄔𑄧 𑄕𑄧
        𑄖𑄧 𑄗𑄧 𑄘𑄧 𑄙𑄧 𑄚𑄧
        𑄛𑄧 𑄜𑄧 𑄝𑄧 𑄞𑄧 𑄟𑄧
        𑄡𑄧 𑄢𑄧 𑄣𑄧 𑄤𑄧
        𑄥𑄧 𑄥𑄧 𑄥𑄧 𑄦𑄧
        𑄣𑄧 𑄇𑄧𑄴𑄥𑄧 𑄎𑄧𑄴𑄐𑄧
        ऩ 𑄢𑄧 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑄃𑄮𑄀 ' 𑅁 𑅂
        𑄶 𑄷 𑄸 𑄹 𑄺 𑄻 𑄼 𑄽 𑄾 𑄿
    `),
};


export const Chakma = new BrahmicScriptDefinition({
    name: BrahmicScript.CHAKMA,
    isRoman: false,
    scheme: ChakmaScheme,
});
