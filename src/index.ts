import { exit } from 'process';
import dataSource from './database';
import { Article } from './database/entities/Article';

(async () => {
  try {
    await dataSource.initialize();
  } catch (e) {
    console.error(e);
    exit(-1);
  }

  const article = new Article();
  article.title = '테스트해보자';
  article.content = 'This is my first article';
  article.views = 0;

  const savedArticle = await dataSource.getRepository(Article).save(article);
  console.log(savedArticle);

  for (let i = 0; i < 10; i++) {
    const start = new Date().getTime();
    const articles = await dataSource.getRepository(Article).find();
    console.log(new Date().getTime() - start, articles.length);
  }

  exit();
})();
