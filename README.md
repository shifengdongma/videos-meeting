# 视频会议管理系统

一个基于 **FastAPI + Vue 3 + WebRTC + WebSocket** 的视频会议与直播管理平台，覆盖会议预约、会议室音视频互动、桌面共享、在线表决、直播中心、权限控制、后台用户管理与会议模板管理等核心场景。

## 项目概览

该项目采用前后端分离架构：

- **后端**：FastAPI + SQLAlchemy + JWT 鉴权
- **前端**：Vue 3 + Vite + TypeScript + Pinia + Vue Router + Element Plus
- **实时通信**：FastAPI WebSocket 用于房间广播与 WebRTC 信令交换
- **数据库**：默认使用 SQLite，本地开发零配置启动
- **音视频能力**：浏览器 `getUserMedia` / `getDisplayMedia` + `RTCPeerConnection`

项目目标是提供一个可直接演示和继续扩展的视频会议业务基础框架，适合用于内部协作系统、会议原型验证、在线表决场景开发，以及 WebRTC/FastAPI/Vue 全栈实践。

## 核心能力

### 1. 账号与权限体系

- 用户注册、登录、获取当前登录信息
- 基于 JWT 的接口鉴权
- 角色分级：
  - `admin`：系统管理员
  - `host`：会议/直播主持人
  - `user`：普通成员
- 首个注册用户自动成为管理员，便于首次初始化系统
- 前端根据角色动态显示导航与可访问页面

### 2. 会议中心

- 查看会议列表、会议状态与会议入口
- 管理员/主持人可手动创建会议
- 支持通过会议模板快速创建会议
- 会议详情页支持：
  - 本地摄像头/麦克风接入
  - 桌面共享
  - 远端成员流展示
  - 在线表决入口

### 3. 在线表决

- 管理员/主持人可在会议中发起表决
- 支持多选项投票（默认含“赞成 / 反对 / 弃权”）
- 用户提交投票后，后端写库并通过 WebSocket 广播实时结果
- 前端实时展示统计结果与提交状态

### 4. 直播中心

- 查看直播列表与房间号
- 管理员/主持人可创建直播
- 主播端可开始采集本地音视频
- 观众端可接收直播主画面
- 基于 WebRTC + WebSocket 完成直播间内的信令交换

### 5. 管理后台

- 用户管理
  - 查看用户列表
  - 修改用户角色
- 会议模板管理
  - 新增、编辑、删除会议模板
  - 设置默认标题、默认时长、容量标签、标签、录播地址、启用状态
  - 模板可直接用于生成会议

## 系统架构

```text
Frontend (Vue 3 + Vite + TS)
  ├─ 登录/注册
  ├─ 会议中心
  ├─ 会议室
  ├─ 直播中心
  └─ 管理后台
          │
          │ HTTP / WebSocket
          ▼
Backend (FastAPI)
  ├─ Auth API
  ├─ Users API
  ├─ Meetings API
  ├─ Meeting Templates API
  ├─ Live Streams API
  ├─ Votes API
  └─ WebSocket Signaling/Broadcast
          │
          ▼
Database (SQLite by default)
  ├─ users
  ├─ meetings
  ├─ meeting_templates
  ├─ live_streams
  ├─ votes
  ├─ vote_options
  └─ vote_records
```

## 技术栈

### 后端

- FastAPI `0.115.12`
- Uvicorn `0.34.0`
- SQLAlchemy `2.0.39`
- pydantic-settings `2.8.1`
- python-jose `3.3.0`
- passlib[bcrypt] `1.7.4`
- python-multipart `0.0.20`

### 前端

- Vue `3.5.13`
- Vue Router `4.5.0`
- Pinia `3.0.1`
- Element Plus `2.9.7`
- Axios `1.9.0`
- ECharts `5.6.0`
- Vite `6.2.0`
- TypeScript `5.7.x`
- Tailwind CSS `3.4.19`

## 目录结构

```text
videos-meeting/
├─ backend/                    # FastAPI 后端
│  ├─ app/
│  │  ├─ api/                  # 路由层：auth、users、meetings、votes、ws...
│  │  ├─ core/                 # 配置、安全相关
│  │  ├─ db/                   # 数据库引擎与会话
│  │  ├─ models/               # SQLAlchemy 模型
│  │  ├─ schemas/              # Pydantic 数据结构
│  │  └─ services/             # 依赖注入、WebSocket 管理器
│  ├─ requirements.txt
│  └─ .gitignore
├─ frontend/                   # Vue 3 前端
│  ├─ src/
│  │  ├─ api/                  # 前端接口封装
│  │  ├─ components/           # 通用组件、媒体组件、表决组件
│  │  ├─ router/               # 路由与权限守卫
│  │  ├─ stores/               # Pinia 状态管理
│  │  ├─ views/                # 页面视图
│  │  ├─ types/                # TS 类型定义
│  │  └─ utils/                # WebSocket 客户端等工具
│  └─ package.json
├─ app.db                      # 默认 SQLite 数据库
├─ 启动手册.md
└─ 视频会议管理系统 - 架构与模块设计说明书.md
```

## 运行环境

建议环境：

- Python 3.11+
- Node.js 18+
- npm 9+
- 现代浏览器（Chrome / Edge，需支持 WebRTC、媒体采集、屏幕共享）

## 快速开始

### 1. 克隆项目

```bash
git clone git@github.com:shifengdongma/videos-meeting.git
cd videos-meeting
```

### 2. 启动后端

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8001
```

后端启动后可访问：

- API 根地址：`http://127.0.0.1:8001`
- OpenAPI 文档：`http://127.0.0.1:8001/docs`

### 3. 启动前端

```bash
cd frontend
npm install
npm run dev
```

前端默认地址：

- `http://127.0.0.1:5173`

### 4. 首次登录

1. 打开前端页面
2. 注册第一个账号
3. **系统会自动将第一个注册账号设置为 `admin`**
4. 使用管理员账号进入后台，为其他用户分配角色

## 默认配置

后端配置位于 `backend/app/core/config.py`，当前默认值包括：

- 应用名：`视频会议管理系统`
- API 前缀：`/api`
- Token 过期时间：`1440` 分钟
- 数据库：`sqlite:///./app.db`
- 允许跨域前端地址：
  - `http://localhost:5173`
  - `http://127.0.0.1:5173`

后端支持通过 `.env` 覆盖配置，常见变量示例：

```env
APP_NAME=视频会议管理系统
API_V1_PREFIX=/api
SECRET_KEY=replace-with-a-secure-secret
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
DATABASE_URL=sqlite:///./app.db
```

## 主要页面说明

### 登录 / 注册

- 登录后自动持久化 `access_token`
- 本地缓存用户信息，用于前端刷新后恢复登录态

### 会议中心

- 显示全部会议、进行中、待开始、已结束数量
- 管理员/主持人可：
  - 手动创建会议
  - 基于模板创建会议
- 任意登录用户可进入会议室

### 会议室

- 打开本地摄像头与麦克风
- 开启/关闭桌面共享
- 展示远端成员视频流
- 发起表决并实时查看统计结果

### 直播中心

- 创建直播房间
- 查看直播房间号
- 进入直播间
- 主播开始采集后向观众分发媒体流

### 后台管理

#### 用户管理

- 查看用户列表
- 修改用户角色

#### 会议模板管理

- 维护会议模板基础信息
- 控制模板启用/停用
- 为会议创建流程提供标准化输入

## 接口概览

后端统一 API 前缀为 `/api`。

### 认证

- `POST /api/auth/register`：注册
- `POST /api/auth/login`：登录
- `GET /api/auth/me`：获取当前用户

### 用户管理

- `GET /api/users`：获取用户列表（admin）
- `PUT /api/users/{user_id}/role`：更新用户角色（admin）

### 会议管理

- `GET /api/meetings`：获取会议列表
- `POST /api/meetings`：创建会议（admin / host）
- `GET /api/meetings/{meeting_id}`：获取会议详情
- `PUT /api/meetings/{meeting_id}`：更新会议（admin / host）
- `DELETE /api/meetings/{meeting_id}`：删除会议（admin / host）

### 会议模板管理

- `GET /api/meeting-templates`：获取模板列表
- `POST /api/meeting-templates`：创建模板（admin）
- `GET /api/meeting-templates/{template_id}`：获取模板详情
- `PUT /api/meeting-templates/{template_id}`：更新模板（admin）
- `DELETE /api/meeting-templates/{template_id}`：删除模板（admin）
- `POST /api/meeting-templates/{template_id}/use`：基于模板创建会议（admin / host）

### 直播管理

- `GET /api/live-streams`：获取直播列表
- `POST /api/live-streams`：创建直播（admin / host）
- `POST /api/live-streams/{stream_id}/stop`：结束直播（admin / host）

### 表决管理

- `GET /api/votes/meeting/{meeting_id}`：获取会议表决列表
- `POST /api/votes`：发起表决（admin / host）
- `POST /api/votes/{vote_id}/submit`：提交投票

## WebSocket 路由

- `ws://127.0.0.1:8001/ws/meetings/{meeting_id}`
  - 会议房间消息广播
  - WebRTC 信令交换
  - 表决结果实时广播
- `ws://127.0.0.1:8001/ws/live/{live_id}`
  - 直播房间信令交换
  - 主播/观众实时连接

## 数据模型概览

项目当前围绕以下核心实体构建：

- `User`
- `Meeting`
- `MeetingTemplate`
- `LiveStream`
- `Vote`
- `VoteOption`
- `VoteRecord`

关键枚举：

- `RoleEnum`
  - `admin`
  - `host`
  - `user`
- `MeetingStatus`
  - `scheduled`
  - `ongoing`
  - `ended`

## 权限规则

| 角色 | 登录 | 会议列表 | 创建会议 | 发起直播 | 发起表决 | 后台管理 |
|---|---|---|---|---|---|---|
| admin | 支持 | 支持 | 支持 | 支持 | 支持 | 支持 |
| host | 支持 | 支持 | 支持 | 支持 | 支持 | 不支持 |
| user | 支持 | 支持 | 不支持 | 不支持 | 不支持 | 不支持 |

## 前端实现说明

前端当前具备以下实现特征：

- 使用 Pinia 管理登录态与用户信息
- 使用 Vue Router 做登录校验与角色访问控制
- Axios 请求拦截器自动附带 Bearer Token
- 会议室与直播间中通过原生 WebRTC API 建立点对点连接
- 通过独立 `WsClient` 封装浏览器 WebSocket 通信
- 页面层已完成主流程 UI，可直接演示核心业务路径

## 后端实现说明

后端当前具备以下实现特征：

- `FastAPI` 提供 REST API 与 WebSocket 服务
- `SQLAlchemy` 负责数据持久化
- 启动时自动执行 `Base.metadata.create_all(bind=engine)` 创建表
- 通过依赖注入实现当前用户解析与角色校验
- 在线表决写入数据库后会实时广播统计结果
- 会议与直播都通过 WebSocket 承担房间广播与信令通道职责

## 开发建议

### 本地联调顺序

建议先启动后端，再启动前端：

```bash
# 终端 1
cd backend
uvicorn app.main:app --reload --host 127.0.0.1 --port 8001

# 终端 2
cd frontend
npm run dev
```

### 推荐测试流程

1. 注册首个管理员账号
2. 新建一个普通成员账号
3. 管理员进入后台，为某个账号设置为 `host`
4. 用 `host` 创建会议并进入会议室
5. 打开摄像头/麦克风与屏幕共享
6. 发起一轮在线表决
7. 使用另一个账号进入同一会议测试投票与实时同步
8. 创建直播并从不同身份进入测试主播/观众流程

## 当前已知限制

由于当前项目以业务原型和基础能力打通为主，仍有一些可继续完善的点：

- WebRTC 当前采用浏览器直连思路，更适合小规模房间演示
- STUN 服务器使用公共 Google STUN，生产环境建议替换为自有 STUN/TURN 服务
- 前端接口地址与 WebSocket 地址目前写死为 `127.0.0.1:8001`
- 默认数据库为 SQLite，更适合本地开发与演示
- 暂未包含自动化测试、Docker 编排、生产部署配置
- 直播“结束”接口当前主要完成权限校验与对象返回，业务收尾可继续扩展

## 适合后续扩展的方向

- 接入 TURN / SFU（如 LiveKit / mediasoup）提升多人会议能力
- 支持会议录像与回放管理
- 增加会议成员邀请、成员列表、主持人控制台
- 增加直播状态、结束逻辑、回放管理
- 增加消息聊天、举手、静音控制等会中功能
- 增加单元测试、接口测试、E2E 测试
- 提供 Docker / Docker Compose / Nginx 部署方案
- 将前端接口地址改为环境变量驱动
- 引入 Alembic 管理数据库迁移

## 常见问题

### 1. 为什么前端无法请求后端？

请确认：

- 后端运行在 `127.0.0.1:8001`
- 前端运行在 `127.0.0.1:5173`
- 后端 CORS 配置包含当前前端地址

### 2. 为什么摄像头或屏幕共享无法使用？

请确认：

- 使用支持 WebRTC 的现代浏览器
- 页面已授予摄像头、麦克风、屏幕录制权限
- 当前运行环境不是被浏览器限制的非安全上下文

### 3. 为什么无法进入后台？

后台仅 `admin` 可访问。若账号不是管理员，需要管理员在用户管理中修改角色。

### 4. 为什么第二个注册用户不是管理员？

系统设计为仅首个注册用户自动成为 `admin`，后续用户默认是 `user`，需要管理员手动提升角色。

## 参考入口

- 后端入口：`backend/app/main.py`
- 前端路由：`frontend/src/router/index.ts`
- 会议室页面：`frontend/src/views/meeting/MeetingRoomView.vue`
- 直播间页面：`frontend/src/views/live/LiveRoomView.vue`
- 会议模板接口：`backend/app/api/meeting_templates.py`
- 表决接口：`backend/app/api/votes.py`

## License

当前仓库未声明开源许可证。如需开源发布，建议补充 `LICENSE` 文件并明确授权方式。
