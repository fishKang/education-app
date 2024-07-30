// @ts-ignore
/* eslint-disable */
// import { request } from '@umijs/max';
import { request } from '@/.umi/plugin-request/request';
import { nanoid } from 'nanoid';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 获取当前的用户 GET /api/currentUser */
export async function getUser(body?: { [key: string]: any }) {
  return request<API.Response>('/api/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialno": nanoid(),
        "zoneno": "200",
        "service": "IDmsServiceARS",
        "method": "userLogin",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0,8)
      },
      "user": {
        "name": "wangkang",
        "password": "123456",
      }
    },
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.UserLogin, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 登录接口 POST /api/login/account */
export async function userLogin(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.Response>('/api/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialno": nanoid(),
        "zoneno": "200",
        "service": "IDmsServiceARS",
        "method": "userLogin",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0,8)
      },
      "user": {
        ...(body || {}),
      }
    },
  });
}
function getNowDate(){
  const date = new Date();
  let month: string | number = date.getMonth() + 1;
  let strDate: string | number = date.getDate();

  if (month <= 9) {
    month = "0" + month;
  }

  if (strDate <= 9) {
    strDate = "0" + strDate;
  }

  return date.getFullYear() + "-" + month + "-" + strDate;
}
/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    data: {
      method: 'update',
      ...(options || {}),
    },
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    data: {
      method: 'post',
      ...(options || {}),
    },
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'POST',
    data: {
      method: 'delete',
      ...(options || {}),
    },
  });
}

/** 登录接口 POST /api/login/account */
export async function queryDetail(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.Response>('/api/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialno": nanoid(),
        "zoneno": "200",
        "service": "IDmsServiceARS",
        "method": "userLogin",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0,8)
      },
      "user": {
        ...(body || {}),
      }
    },
  });
}