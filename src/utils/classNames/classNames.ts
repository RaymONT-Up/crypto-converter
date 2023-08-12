type Mods = Record<string, boolean | string>;

// cls = className
const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string => [
    cls,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([cls]) => cls),
    ...additional.filter((cls) => Boolean(cls)),
].join(' ');
export default classNames;