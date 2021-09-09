import { Request, Response } from 'express';

export default {
  'POST /api/user/login': (req: Request, res: Response) => {
    const { password, username, type } = req.body;
    if (password === '123' && username === 'admin') {
      res.send({
        code: 200,
        msg: '成功',
        data: type
      });
      return;
    }
    res.send({
      code: 1003,
      msg: '异常',
      data: type
    });
  },
  'GET /api/user/info': {
    code: 200,
    msg: '获取成功',
    data: {
      name: 'Admin',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      country: 'China',
      address: '西湖区工专路 77 号',
      phone: '023-88888888',
      access: ['admin']
    }
  }
};
