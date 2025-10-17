
import { marked } from 'marked';

export const loadComponentMarkdown = async (slug) => {
	try {
		const response = await fetch(`./src/lib/content/${slug}.md`);
		if(!response.ok)
			throw new Error('Post not found');
		const markdown = await response.text();
		return marked(markdown); // преобразуем markdown в HTML
		//return markdown;
	} catch (error) {
		console.error('Error loading markdown:', error);
		return '# Пост не найден\n\nИзвините, запрашиваемый пост не существует.';
	}
};