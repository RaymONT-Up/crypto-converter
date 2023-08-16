import { getParamFromUrl } from "../../../utils/getParamFromUrl/getParamFromUrl"
import { setParamToUrl } from "../../../utils/setParamToUrl/setParamToUrl"

export enum coinsParams {
    page = 'page',
    perPage = 'perPage',
}

export const getPageUrlParam = (): number | false => {
    return +getParamFromUrl(coinsParams.page)
}

export const setPageUrlParam = (page: number) => {
    setParamToUrl(coinsParams.page, page.toString())
}

export const getPerPageUrlParam = (): number | false => {
    return +getParamFromUrl(coinsParams.perPage)
} 