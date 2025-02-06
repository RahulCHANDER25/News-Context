import { AnalysisResponseBody } from "@/api/types/IPromptBody"
import { ArticleRequestBody } from "@/api/types/articleBody"
import axios from "axios"

export const sendArticleRequest = async (articleBody: string): Promise<AnalysisResponseBody> => {
    try {
        const response = axios.post<ArticleRequestBody, AnalysisResponseBody>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/analysis/article`, {
            model: "mistral",
            articleBody: articleBody
        })

        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}
