

export const getParamFromUrl = (paramName: string): string | false => {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName) || false;
};