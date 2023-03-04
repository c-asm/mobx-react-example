import { makeAutoObservable } from "mobx"

type Article = {id: Number, title: String; text: String};

class ArticleStore {
    news_list: Array<Article> = [];

	constructor() {
		makeAutoObservable(this);
	}

	get news() {
		return this.news_list;
	}
	clear() {
		this.news_list = [];
	}
	push(articles: Article | Array<Article>) {
		if (Array.isArray(articles)) {
			this.news_list.push(...articles);
		} else {
			this.news_list.push(articles);
		}
	}
}

// (!) Export store instance, not class definition
export default new ArticleStore();