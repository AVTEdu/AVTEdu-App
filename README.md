# AVTEdu-App

Hệ thống quản lý sinh viên trường đại học - Đồ án tốt nghiệp.

**Thành viên thực hiện:**
1. Nguyễn Việt Anh
2. Phạm Nguyễn Văn Trường

**Video demo:** https://www.youtube.com/watch?v=gxS-kyP2Uts

---

## Giới thiệu

AVTEdu-App là hệ thống quản lý sinh viên cho trường đại học, bao gồm các chức năng chính:

- **Sinh viên:** đăng nhập, xem thời khóa biểu, xem điểm, đăng ký học phần (DKHP), đăng ký lớp học phần, tra cứu công nợ, thanh toán học phí trực tuyến.
- **Giảng viên:** quản lý thông báo, điểm danh lớp học phần.
- **Quản trị viên:** quản lý người dùng (admin/giảng viên/sinh viên), khoa - chuyên ngành, môn học - học phần, lớp học phần - phân công giảng dạy, phòng học, thời khóa biểu, công nợ.

## Kiến trúc hệ thống

Hệ thống gồm 3 sub-project:

| Service | Đường dẫn | Port | Stack |
|---------|-----------|------|-------|
| Backend API | `sv-app-be/` | 4000 | Node.js 16 + Express + Sequelize (MySQL) + Redis + JWT |
| Web Frontend | `sv-app-fe/` | 3000 | React 18 (Create React App) + Material UI |
| Mobile App | `sv-app-mobile/` | - | React Native (Expo SDK 47) + Redux Toolkit |

```
┌─────────────┐   ┌──────────────┐   ┌──────────────┐
│  sv-app-fe  │   │ sv-app-mobile│   │     Nginx    │
│  React (3000)│   │ Expo/RN      │   │  (proxy 80)  │
└──────┬──────┘   └──────┬───────┘   └──────┬───────┘
       │                 │                  │
       └─────────────────┴──────┬───────────┘
                                ▼
                       ┌──────────────────┐
                       │   sv-app-be       │  Express API
                       │   (port 4000)     │
                       └───────┬───────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
             MySQL 8.0      Redis         Cloudinary /
             (sinhviendb)   (session)     AWS S3
```

## Cấu trúc thư mục

```
AVTEdu-App/
├── .docker/                 # docker-compose cho môi trường dev
├── document/                # tài liệu / đồ án
├── nginx/                   # cấu hình Nginx proxy
├── sv-app-be/               # Backend API
│   └── src/
│       ├── config/          # cấu hình kết nối (MySQL, Redis, Cloudinary, AWS, Firebase, MoMo, Mail)
│       ├── controller/      # xử lý logic nghiệp vụ (auth, giangvien, userRequest, admin/*)
│       ├── handlers/        # helper xử lý response
│       ├── helpers/         # JWT, Redis, validate, sinh key
│       ├── models/          # Sequelize models (bảng CSDL)
│       └── router/          # định nghĩa API routes
├── sv-app-fe/               # Web Frontend
│   └── src/
│       ├── api/             # axios client + API calls
│       ├── assets/          # ảnh, css, js, vendor
│       ├── component/       # UI components (admin/, giangvien/, dùng chung)
│       ├── services/        # context, hooks, redux
│       ├── styles/          # global styles (SCSS)
│       ├── utils/           # tiện ích (setAuthToken)
│       └── views/           # App.js - routing
└── sv-app-mobile/           # Mobile App (Expo)
    └── src/
        ├── api/             # axios client, store, slice
        ├── components/      # UI components
        ├── consts/          # hằng số (màu sắc, nút)
        ├── sample/          # dữ liệu mẫu
        └── screens/         # màn hình (Đăng nhập, TKB, Điểm, ĐKHP, ...)
```

## Yêu cầu

- **Node.js 16** (bắt buộc với backend - một số dependency như `redis@3.1.2` không tương thích Node mới hơn)
- **MySQL 8.0**
- **Redis** (dùng cho session/lưu trữ token)
- Docker (tuỳ chọn, cho việc chạy MySQL/Redis)

## Cài đặt và chạy

### 1. Khởi tạo cơ sở dữ liệu

Chạy MySQL và Redis bằng Docker:

```sh
sudo docker start mysql-dev redis-dev
# Hoặc tạo mới:
sudo docker run -d --name mysql-dev \
  -e MYSQL_ROOT_PASSWORD=sapassword \
  -e MYSQL_DATABASE=sinhviendb \
  -p 3306:3306 mysql:8.0
sudo docker run -d --name redis-dev -p 6379:6379 redis:alpine3.16
```

Chờ MySQL sẵn sàng (~10-15 giây) trước khi khởi động backend. Các bảng sẽ được tự động tạo bởi `sequelize.sync()` khi backend khởi động.

> Lưu ý: port Redis trong `.docker/docker-compose.yml` map `6380:6379`.

### 2. Backend (`sv-app-be/`)

```sh
nvm use 16
cd sv-app-be
npm install
npm start        # chạy nodemon src/index.js, port 4000
```

Cấu hình biến môi trường trong file `.env` (xem mục "Biến môi trường" bên dưới).

### 3. Web Frontend (`sv-app-fe/`)

```sh
cd sv-app-fe
npm install --legacy-peer-deps   # bắt buộc do xung đột peer dependencies
npm start                        # chạy dev server, port 3000
```

Đảm bảo `sv-app-fe/src/api/axiosClient.js` trỏ tới `http://localhost:4000/` cho local dev.

### 4. Mobile App (`sv-app-mobile/`)

> Không thể chạy trong môi trường headless VM (cần máy ảo/thiết bị Expo).

```sh
cd sv-app-mobile
npm install
npm start        # expo start
npm run android  # hoặc iOS
```

`sv-app-mobile/src/api/axiosClient.js` mặc định trỏ tới server remote `https://api.avtedu.cloud` — đổi thành `http://<IP-máy>:4000` khi chạy local.

## Biến môi trường (Backend `.env`)

| Biến | Mô tả |
|------|-------|
| `PORT` | Cổng chạy server (mặc định 4000) |
| `DATABASE_NAME` | Tên database (mặc định `sinhviendb`) |
| `DATABSE_USERNAME` | Username MySQL (lưu ý: tên biến gõ thiếu chữ "A" là chủ ý) |
| `DATABASE_PASSWORD` | Password MySQL |
| `MYSQL_HOST` | Host MySQL (mặc định `localhost`) |
| `MYSQL_PORT` | Port MySQL (mặc định 3306) |
| `ACCESS_TOKEN_SECRET` | Secret ký access token |
| `REFRESH_TOKEN_SECRET` | Secret ký refresh token |
| `REDIS_CONNECT_URL` | URL Redis cloud |
| `REDIS_CONNECT_HOST` / `REDIS_CONNECT_PASSWORD` | Redis cloud credentials |
| `CLOUDINARY_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECERT` | Cloudinary (upload ảnh) |
| `ACCESS_KEY_ID` / `SECRET_ACCESS_KEY` | AWS credentials (S3) |

## Cấu trúc CSDL (Sequelize models)

Các bảng chính trong `sv-app-be/src/models/`:

- **Hệ thống người dùng:** `sinh_vien`, `giang_vien`, `admin`
- **Danh mục:** `khoa`, `chuyen_nganh`, `bac_dao_tao`, `mo_hinh_dao_tao`, `khoa_hoc`, `dan_toc`, `ton_giao`, `trang_thai_hoc_tap`
- **Đào tạo:** `mon_hoc`, `hoc_phan`, `chuyen_nganh_hoc_phan`, `hoc_ki`, `lop_hoc_phan`, `phancong_lop_hoc_phan`
- **Phòng & lịch:** `phong_hoc`, `loai_phong_hoc`, `thoi_khoa_bieu`, `thoi_khoa_bieu_sinh_vien`
- **Kết quả & tài chính:** `ket_qua_hoc_tap`, `hoc_phi`, `hoc_phi_sinh_vien`, `phieu_thu`

## API chính

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/auth/signin` | Đăng nhập sinh viên |
| POST | `/auth/signinAdmin` | Đăng nhập admin |
| POST | `/auth/signinGiangVien` | Đăng nhập giảng viên |
| POST | `/auth/refreshToken` | Làm mới access token |
| DELETE | `/auth/logout` | Đăng xuất |
| ... | `/admin/*` | CRUD quản trị (create/update/delete/get) |
| ... | `/userRequest/*` | API cho sinh viên (thông tin SV, DKHP, lịch, điểm, công nợ...) |
| ... | `/giangvien/*` | API cho giảng viên (điểm danh, thông báo...) |
| GET | `/hello` | Kiểm tra server online |

## Deploy với Docker

```sh
docker compose -f .docker/docker-compose.yml up -d
```

docker-compose hiện tại chạy **Redis** và **backend** (build từ `sv-app-be/Dockerfile`), map port `4000`. Nginx (`nginx/`) có thể bật làm reverse proxy tới backend.

## Dữ liệu mẫu

Sau khi tạo database mới, chèn tài khoản test:

```sh
# Tạo bcrypt hash: node -e "console.log(require('bcryptjs').hashSync('admin123', 10))"
# Sinh viên: ma = 31200001, password = student123
# Admin: ma = 1, password = admin123
```

## Ghi chú & lưu ý

- **Node version:** dùng `nvm use 16` khi làm việc với backend.
- **Frontend install:** luôn dùng `npm install --legacy-peer-deps`.
- **Tên biến `DATABSE_USERNAME`** trong `.env` cố tình thiếu chữ "A" (`DATABSE` thay vì `DATABASE`) — giữ nguyên theo cấu hình `mysql.config.js`.
- **Sync model:** `ConnectDB` là singleton cấp module để `sequelize.sync()` xử lý đúng thứ tự khóa ngoại.
- **Frontend API base URL:** đổi giữa `http://localhost:4000/` (dev) và `https://api.avtedu.cloud/` (production).
- Không có automated tests trong dự án (backend không có script test, frontend không có file test).
