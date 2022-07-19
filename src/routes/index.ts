import { Express } from 'express';
import home from '@/routes/home';
import qq from '@/routes/qq';
import HttpStatus from '@/common/HttpStatus';

function routes(app: Express): void {
  app.use((req, res, next) => {
    const method = req.method;
    const path = req.url;
    res.on('finish', () => console.log(`${method}-${path}`));
    next();
  });
  app.use('/api/v1/home', home);
  app.use('/api/v1/qq', qq);
  // 未匹配到路由
  app.all('*', (req, res) => {
    res.status(HttpStatus.Not_Found).json({ message: '404 not found' });
  });
  // 错误处理
}

export default routes;
