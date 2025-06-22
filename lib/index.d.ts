export = UuidEncoder;
declare class UuidEncoder {
    /**
     * @private
     * @param {string} baseEncodingStr
     * @returns {string}
     */
    private static resolveEncodingStr;
    /**
     * @public
     * @param {string} baseEncodingStr
     * @returns {boolean}
     */
    public static isCaseSensitiveBase(baseEncodingStr: string): boolean;
    /**
     * @public
     * @param {string} baseEncodingStr A string containing all usable letters for encoding
     * @constructor
     */
    constructor(baseEncodingStr?: string);
    /**
     * Set encoding base
     * @param {string} baseEncodingStr A string containing all usable letters for encoding
     * @public
     */
    public setBaseEncodingStr(baseEncodingStr: string): void;
    encStr: string;
    isCaseSensitive: boolean;
    base: number;
    /**
     * Encode a UUID
     * @param {string} uuid Properly formatted UUID
     * @returns {string} Encoded UUID
     * @public
     */
    public encode(uuid: string): string;
    /**
     * Decode an encoded UUID
     * @public
     * @param {string} str Previously encoded string
     * @returns {string} Properly formatted UUID
     * @throws Throws an {Error} when encountering invalid data
     */
    public decode(str: string): string;
}
