import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const RohingyaScheme: IScriptScheme = {
    vowels: ['𐴀𐴝', '𐴀𐴝𐴤', '𐴀𐴞', '𐴀𐴞𐴤', '𐴀𐴟', '𐴀𐴟𐴤', '𐴌𐴟', '𐴌𐴟𐴤', '𐴓𐴟', '𐴓𐴟𐴤', '𐴀𐴠𐴤', '𐴀𐴝𐴙', '𐴀𐴡𐴤', '𐴀𐴝𐴗', 'ऎ', 'ऒ'],
    marks: ['𐴀𐴝𐴤', '𐴀𐴞', '𐴀𐴞𐴤', '𐴀𐴟', '𐴀𐴟𐴤', '𐴌𐴟', '𐴌𐴟𐴤', '𐴓𐴟', '𐴓𐴟𐴤', '𐴀𐴠𐴤', '𐴀𐴝𐴙', '𐴀𐴡𐴤', '𐴀𐴝𐴗', '', ''],
    virama: s(''),
    yogavaahas: ['𐴣', '𐴇', '𐴣', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𐴑𐴝 𐴑𐴝 𐴒𐴝 𐴒𐴝 𐴚𐴝
        𐴆𐴝 𐴆𐴝 𐴅𐴝 𐴅𐴝 𐴛𐴝
        𐴄𐴝 𐴄𐴝 𐴋𐴝 𐴋𐴝 𐴕𐴝
        𐴃𐴝 𐴃𐴝 𐴊𐴝 𐴊𐴝 𐴕𐴝
        𐴂𐴝 𐴂𐴝 𐴁𐴝 𐴁𐴝 𐴔𐴝
        𐴘𐴝 𐴌𐴝 𐴓𐴝 𐴖𐴝
        𐴐𐴝 𐴐𐴝 𐴏𐴝 𐴇𐴝
        𐴓𐴝 𐴑𐴝𐴐𐴝 𐴅𐴝𐴛𐴝
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𐴀𐴀𐴡𐴴𐴔 ऽ । ॥
        𐴰 𐴱 𐴲 𐴳 𐴴 𐴵 𐴶 𐴷 𐴸 𐴹
    `),
};


export const Rohingya = new BrahmicScriptDefinition({
    name: BrahmicScript.ROHINGYA,
    isRoman: false,
    scheme: RohingyaScheme,
});
