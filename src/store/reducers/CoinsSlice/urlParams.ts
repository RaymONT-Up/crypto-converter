import { getParamFromUrl } from "../../../utils/getParamFromUrl/getParamFromUrl"
import { setParamToUrl } from "../../../utils/setParamToUrl/setParamToUrl"

export enum coinsParams {
    page = 'page',
    perPage = 'perPage',
    search = 'search'
}

// page
export const getPageUrlParam = (): number | false => {
    return +getParamFromUrl(coinsParams.page)
}
export const setPageUrlParam = (page: number) => {
    setParamToUrl(coinsParams.page, page.toString())
}

// perPage
export const getPerPageUrlParam = (): number | false => {
    return +getParamFromUrl(coinsParams.perPage)
}

// search
export const getSearchUrlParam = (): string | false => {
    return getParamFromUrl(coinsParams.search)
}
export const setSearchUrlParam = (search: string) => {
    setParamToUrl(coinsParams.search, search)
}