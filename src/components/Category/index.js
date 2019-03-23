import React, { Component } from "react";
import axios from 'axios'
import LoadBox from '../Home/LoadBox';
import ErrorBox from '../Home/ErrorBox';
import CategoryPost from "./CategoryPost";
import CategoryMenu from "../CategoryMenu"
const url = 'http://localhost:8080/json/categories/posts/';


class Category extends Component {

	constructor(props) {
		super(props);
		this.state = {
			category: {},
			posts: [],
			isLoading: false,
			error: null,
		}
	}

	getCategoryWithPosts = async () => {
		this.setState({ isLoading: true });

		try {
			const categoryWithPosts = await axios.get(`${url}${this.props.match.params.slug}`);
			this.setState({
				category: { name: categoryWithPosts.data.name },
				posts: categoryWithPosts.data.posts,
				isLoading: false,
				error: null
			});
		} catch (error) {
			this.setState({
				error,
				isLoading: false
			})
		}
	}

	componentDidMount() {
		this.getCategoryWithPosts()
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.getCategoryWithPosts()
		}
	}

	render() {
		const { category, isLoading, error, posts } = this.state

		if (error) {
			return <ErrorBox
				error={error}
				getPosts={this.getCategoryWithPosts}
			/>
		}

		if (isLoading) {
			return <LoadBox />
		}

		return (
			<div>
				<CategoryMenu />
				<div className="category-post-list-container">
					<header className="category-post-header">
						<h1>{category.name}</h1>
					</header>
					<ul className='category-post-list'>
						{
							posts.map(post =>
								<CategoryPost
									slug={post.slug}
									thumbnail={post.thumbnail}
									title={post.title}
									summary={post.summary}
								/>)
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default Category;
