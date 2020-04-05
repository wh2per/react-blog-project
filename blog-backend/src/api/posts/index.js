import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', checkLoggedIn,postsCtrl.checkOwnPost, postsCtrl.remove);
posts.patch('/:id', checkLoggedIn,postsCtrl.checkOwnPost, postsCtrl.update);

post.use('/:id', postsCtrl.getPostById, post.routes());
export default posts;