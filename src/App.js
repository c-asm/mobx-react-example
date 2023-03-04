import Header from './components/Header';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import './css/Home.css';

import { observer } from "mobx-react-lite";
import { inject } from 'mobx-react';

import { useCallback } from 'react';


const App = observer((stores) => {
	var stores = stores.rootStore;
	
	const updateArticles = useCallback(() => {
		// In a real app, send some request here.
		console.log('Updating news store...')
		stores.ArticleStore.clear();
		// Example data (ignore the goofy titles)
		stores.ArticleStore.push([
			{id: 0, title: 'Obama is gay!', text: 'Obama\'s gender has been recently changed...'},
			{id: 1, title: 'No towers :(', text: '9/11 just occured in New York city...'},
			{id: 2, title: 'Physics broke!', text: 'Due to your mum\'s extreme weight, physics aren\'t working anymore'}
		]);
	});

	return (
		<>
			<Header />
			<Container className='articles-wrapper'>
				<Row className='articles-wrapper-title'> <div> {
						stores.ArticleStore.news.length ? <>
							<span><b>{stores.ArticleStore.news.length}</b> Articles</span>
						</> : <>
							<span>No articles available</span>
						</>
					}
					<span onClick={updateArticles} id='refreshArticlesBtn'><u>Refresh</u></span>
				</div> </Row>
				<hr/>
				<Row className='articles-wrapper-list'> {
					stores.ArticleStore.news.length ? 
						stores.ArticleStore.news.map(e => 
							<div key={e.id} data-articleid={e.id} className='article-card'>
								<span><b>{e.title}</b></span>
								<span>{e.text}</span>
							</div>
						)
					: <>
						<span className='w-100 text-center articles-notfound'>🙈 No articles</span>
					</>
				} </Row>
			</Container>
		</>
	)
});

// rootStore is now available through 'this' keyword.
// Same technique is used in other components
export default inject('rootStore')(App);