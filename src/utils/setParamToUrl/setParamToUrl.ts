export const setParamToUrl = (paramName: string, paramValue: string) => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(paramName) !== paramValue) {
        params.set(paramName, paramValue);

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState(null, "", newUrl);
    }
};