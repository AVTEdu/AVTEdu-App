# Sử dụng hình ảnh chứa Nginx làm cơ sở
FROM nginx

# Sao chép tệp cấu hình Nginx vào hình ảnh
COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE cổng 80 và 443 để có thể truy cập vào Nginx từ bên ngoài
EXPOSE 80
EXPOSE 443

# Khởi động dịch vụ Nginx khi chạy hình ảnh
CMD ["nginx", "-g", "daemon off;"]
