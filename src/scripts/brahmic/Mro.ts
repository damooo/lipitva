import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const MroScheme: IScriptScheme = {
    vowels: ['𖩒', '𖩆', '𖩊', '𖩊', '𖩑', '𖩑', '𖩓𖩑', '𖩓𖩑', '𖩍𖩑', '𖩍𖩑', '𖩘', '𖩆𖩂', '𖩑', '𖩖', 'ऎ', 'ऒ'],
    marks: ['𖩆', '𖩊', '𖩊', '𖩑', '𖩑', '𖩓𖩑', '𖩓𖩑', '𖩍𖩑', '𖩍𖩑', '𖩘', '𖩆𖩂', '𖩑', '𖩖', '', ''],
    virama: s(''),
    yogavaahas: ['𖩃', '𖩉', '𖩃', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𖩌𖩒 𖩈𖩒 𖩌𖩒 𖩈𖩒 𖩁𖩒
        𖩋𖩒 𖩋𖩒 𖩋𖩒 𖩋𖩒 𖩏𖩒
        𖩀𖩒 𖩕𖩒 𖩅𖩒 𖩅𖩒 𖩏𖩒
        𖩀𖩒 𖩕𖩒 𖩅𖩒 𖩅𖩒 𖩏𖩒
        𖩐𖩒 𖩇𖩒 𖩄𖩒 𖩄𖩒 𖩃𖩒
        𖩂𖩒 𖩓𖩒 𖩍𖩒 𖩗𖩒
        𖩔𖩒 𖩔𖩒 𖩔𖩒 𖩉𖩒
        𖩍𖩒 𖩌𖩒𖩔𖩒 𖩋𖩒𖩏𖩒
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𖩑𖩃 ऽ । ॥
        𖩠 𖩡 𖩢 𖩣 𖩤 𖩥 𖩦 𖩧 𖩨 𖩩
    `),
};


export const Mro = new BrahmicScriptDefinition({
    name: BrahmicScript.MRO,
    isRoman: false,
    scheme: MroScheme,
});
