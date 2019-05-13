import Span from './Span';
import Util from '../utils/Util';
import ColorUtil from '../utils/ColorUtil';

export default class ColorSpan extends Span {
    
    constructor(color, variantR, variantG, variantB) {
        super();
        //this._baseColor = color;
        var _color = color;
        
        if (typeof _color === 'string'){
            _color = ColorUtil.hexToRGB(color);
        }
        
        this._baseR = _color.r;
        this._baseG = _color.g;
        this._baseB = _color.b;
        
        this.variantR = Util.initValue(variantR, 0);
        this.variantG = Util.initValue(variantG, 0);
        this.variantB = Util.initValue(variantB, 0);
    }

    getValue() {
        const r = Math.max(0, Math.min(255, this._baseR + this.variantR * (Math.random() * 2.0 - 1.0)*255));
        const g = Math.max(0, Math.min(this._baseG + this.variantG * (Math.random() * 2.0 - 1.0)*255));
        const b = Math.max(0, Math.min(this._baseB + this.variantB * (Math.random() * 2.0 - 1.0)*255));

        return ColorUtil.rbgToHexString({ r, g, b});
    }

}