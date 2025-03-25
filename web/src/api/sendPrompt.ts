import { AnalysisResponseBody } from "@/api/types/IPromptBody"
import { ArticleRequestBody } from "@/api/types/articleBody"
import axiosInstance from "@/libs/axios"
import { AxiosResponse } from "axios"

export const sendArticleRequest = async (articleBody: string): Promise<AxiosResponse<AnalysisResponseBody>> => {
    try {
        const response = axiosInstance.post<AnalysisResponseBody, AxiosResponse<AnalysisResponseBody>, ArticleRequestBody>(`/analysis/article`, {
            model: "mistral",
            articleBody: articleBody
        })

        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}
