import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const AhomScheme: IScriptScheme = {
    vowels: ['𑜒', '𑜒𑜡', '𑜒𑜢', '𑜒𑜣', '𑜒𑜤', '𑜒𑜥', '𑜍𑜤', '𑜍𑜥', '𑜎𑜤', '𑜎𑜥', '𑜒𑜦', '𑜒𑜩', '𑜒𑜨', '𑜒𑜧', '𑜒𑜦', '𑜒𑜨'],
    marks: ['𑜡', '𑜢', '𑜣', '𑜤', '𑜥', '𑜞𑜤', '𑜞𑜥', '𑜝𑜤', '𑜝𑜥', '𑜦', '𑜩', '𑜨', '𑜧', '𑜦', '𑜨'],
    virama: s('𑜫'),
    yogavaahas: ['𑜪', '𑜑𑜫', '𑜪', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑜀 𑜁 𑜕 𑜗 𑜂
        𑜋 𑜋 𑜊 𑜙 𑜐
        𑜄 𑜌 𑜓 𑜔 𑜃
        𑜄 𑜌 𑜓 𑜔 𑜃
        𑜆 𑜇 𑜈 𑜘 𑜉
        𑜊 𑜍 𑜎 𑜈
        𑜏 𑜏 𑜏 𑜑
        𑜎 𑜀𑜫𑜏 𑜊𑜫𑜐
        ऩ 𑜍 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑜒𑜪𑜨 ' 𑜼 𑜽
        𑜰 𑜱 𑜲 𑜳 𑜴 𑜵 𑜶 𑜷 𑜸 𑜹
    `),
};


export const Ahom = new BrahmicScriptDefinition({
    name: BrahmicScript.AHOM,
    isRoman: false,
    scheme: AhomScheme,
});
