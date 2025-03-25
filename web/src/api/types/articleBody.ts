import { IPromptBody } from "./IPromptBody";

export interface ArticleRequestBody extends IPromptBody {
    articleBody: string
}
