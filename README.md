# Tạo Ảnh AI

Extension tạo ảnh hàng loạt trên `labs.google` (Google Flow), dành cho người dùng cài vào Google Chrome.

## Tải Extension

Tải nhanh file cài đặt:

[Tải TaoAnhAI.zip](https://github.com/led14900/tao-anh-ai-extension/raw/main/TaoAnhAI.zip)

Hoặc tải từ trang GitHub:

1. Mở repo: `https://github.com/led14900/tao-anh-ai-extension`
2. Bấm nút màu xanh `Code`.
3. Chọn `Download ZIP`.
4. Giải nén file ZIP vừa tải.
5. Trong thư mục vừa giải nén, tìm file `TaoAnhAI.zip`.
6. Giải nén tiếp file `TaoAnhAI.zip`.

## Cài Đặt Extension

1. Mở Google Chrome.
2. Truy cập `chrome://extensions`.
3. Bật `Developer mode` hoặc `Chế độ dành cho nhà phát triển`.
4. Bấm `Load unpacked`.
5. Chọn đúng thư mục vừa giải nén có file `manifest.json`.
6. Extension `Tạo Ảnh AI` sẽ xuất hiện trong danh sách.
7. Bấm biểu tượng mảnh ghép trên thanh Chrome, tìm `Tạo Ảnh AI` và bấm ghim để dễ mở.

Nếu chọn sai thư mục, extension sẽ không hiện lên. Hãy chọn đúng thư mục có file `manifest.json`.

## Chuẩn Bị Trước Khi Dùng

- Mở trang `https://labs.google/`.
- Đăng nhập tài khoản Google nếu được yêu cầu.
- Mở đúng công cụ tạo ảnh hoặc trang Flow trong `labs.google`.
- Chờ trang tải xong và đảm bảo bạn nhìn thấy ô nhập prompt.
- Bấm icon `Tạo Ảnh AI` trên Chrome để mở bảng điều khiển bên cạnh.

Extension hoạt động tốt nhất trên `labs.google`. Nếu mở trang khác, extension sẽ không tương thích hoàn toàn.

## Nhập Prompt

Bạn có thể nhập prompt theo 2 cách.

### Mỗi dòng là một prompt

```text
Một biệt thự hiện đại giữa rừng thông, ánh sáng hoàng hôn
Ảnh sản phẩm nước hoa đặt trên đá marble, ánh sáng studio
Một robot thân thiện trong thành phố tương lai, phong cách điện ảnh
```

Ví dụ trên sẽ được hiểu là 3 prompt.

### Prompt dài nhiều dòng

Nếu một prompt cần viết nhiều dòng, hãy dùng một dòng chỉ có `---` để ngăn cách giữa các prompt.

```text
Một căn phòng khách tối giản
Ánh sáng tự nhiên từ cửa sổ lớn
Sofa trắng, vật liệu gỗ sáng
---
Một quán cà phê nhỏ trong hẻm
Ánh sáng buổi sáng
Không khí ấm áp, phong cách ảnh điện ảnh
```

Bạn cũng có thể dùng `===` thay cho `---`.

## Kiểm Tra Prompt Trước Khi Gửi

Sau khi nhập prompt, hãy nhìn phần `Prompt sẽ gửi` để kiểm tra:

- Extension đã tách đúng số prompt chưa.
- Prompt có bị dính vào nhau không.
- Prompt dài nhiều dòng đã được chia đúng chưa.

Nếu thấy sai, hãy sửa lại ở ô `Danh sách prompt` trước khi bấm gửi.

## Chọn Số Lần Lặp

Mục `Mỗi prompt` cho biết mỗi prompt sẽ được gửi bao nhiêu lần.

Ví dụ:

- Có 5 prompt.
- Chọn `3x`.
- Tổng số lượt gửi là 15 lượt.

Nếu mới dùng lần đầu, nên chọn `1x` để thử trước.

## Chọn Thời Gian Chờ

Mục `Cách nhau` là thời gian nghỉ giữa hai lượt gửi.

Ví dụ: chọn `30s` nghĩa là sau khi gửi một prompt, extension chờ 30 giây rồi mới gửi tiếp.

Khuyến nghị:

- Nếu chỉ thử vài prompt, có thể chọn `10s` hoặc `20s`.
- Nếu gửi nhiều prompt, nên chọn `30s`, `45s` hoặc `60s`.
- Nếu `labs.google` phản hồi chậm, hãy tăng thời gian chờ.

Không nên chọn thời gian quá ngắn khi gửi nhiều ảnh, vì trang có thể chưa kịp xử lý lượt trước.

## Gửi Prompt Tự Động

1. Đảm bảo tab đang mở là `labs.google`.
2. Đảm bảo trên trang có ô nhập prompt.
3. Nhập danh sách prompt vào extension.
4. Chọn số lần lặp ở mục `Mỗi prompt`.
5. Chọn thời gian chờ ở mục `Cách nhau`.
6. Bấm `Gửi vào labs.google`.
7. Giữ nguyên tab đó trong lúc extension chạy.

Trong lúc chạy, extension sẽ tự:

- Tìm ô nhập prompt trên `labs.google`.
- Điền prompt vào ô nhập.
- Bấm nút tạo ảnh hoặc nút gửi.
- Chờ theo số giây bạn đã chọn.
- Chuyển sang prompt tiếp theo.

Không nên chuyển sang tab khác trong khi extension đang chạy.

## Dừng Khi Đang Chạy

Khi extension đang gửi prompt, nút gửi sẽ đổi thành nút `Dừng`.

Để dừng:

1. Bấm `Dừng`.
2. Extension sẽ dừng queue.
3. Nếu đang chờ giữa hai lượt gửi, extension sẽ dừng trước lượt tiếp theo.
4. Nếu đang gửi một lượt hiện tại, extension có thể hoàn tất lượt đó rồi mới dừng.

## AI Rewrite

`AI rewrite` dùng Gemini API để viết lại prompt cho rõ ràng hơn, chi tiết hơn và phù hợp hơn với tạo ảnh.

Tính năng này không bắt buộc. Nếu không dùng `AI rewrite`, bạn vẫn gửi prompt tự động bình thường.

AI rewrite sẽ:

- Giữ nguyên số lượng prompt.
- Giữ nguyên thứ tự prompt.
- Viết lại prompt theo hướng dễ tạo ảnh hơn.
- Ưu tiên prompt tiếng Anh để kết quả tạo ảnh ổn định hơn.
- Không tự thêm tỷ lệ khung hình, độ phân giải, seed hoặc tên file.

## Lấy Gemini API Key

Bạn chỉ cần làm phần này nếu muốn dùng nút `AI rewrite`.

1. Mở Chrome.
2. Truy cập `https://aistudio.google.com/app/apikey`.
3. Đăng nhập bằng tài khoản Google.
4. Nếu Google hỏi đồng ý điều khoản sử dụng, hãy đọc và bấm đồng ý.
5. Tìm nút `Create API key`.
6. Bấm `Create API key`.
7. Nếu hệ thống hỏi chọn project, chọn một project có sẵn hoặc tạo project mới.
8. Chờ vài giây để Google tạo key.
9. Khi key hiện ra, bấm nút copy để sao chép API Key.

API Key thường bắt đầu bằng:

```text
AIzaSy...
```

Không gửi API Key cho người khác và không đăng API Key công khai lên Facebook, Google Drive, GitHub hoặc website.

## Dán API Key Vào Extension

1. Mở extension `Tạo Ảnh AI`.
2. Bấm icon bánh răng.
3. Dán API Key vào ô `Gemini API Key`.
4. Bấm `Lưu cài đặt`.

API Key được lưu trong Chrome trên máy của bạn. Extension chỉ dùng key này cho tính năng `AI rewrite`.

## Dùng AI Rewrite

1. Nhập danh sách prompt vào ô `Danh sách prompt`.
2. Bấm `AI rewrite`.
3. Chờ AI xử lý.
4. Sau khi xử lý xong, prompt trong ô nhập sẽ được thay bằng bản đã viết lại.
5. Đọc lại prompt.
6. Nếu thấy ổn, bấm `Gửi vào labs.google`.

Nếu AI rewrite báo lỗi, hãy kiểm tra:

- Đã nhập API Key chưa.
- API Key có bị sai không.
- Tài khoản Google AI Studio còn quota không.
- Mạng Internet có ổn định không.

## Cập Nhật Extension

Khi có bản mới:

1. Tải lại `TaoAnhAI.zip` từ link trong phần `Tải Extension`.
2. Giải nén file ZIP mới.
3. Mở `chrome://extensions`.
4. Tìm extension `Tạo Ảnh AI`.
5. Bấm `Remove` hoặc `Gỡ` để gỡ bản cũ.
6. Bấm `Load unpacked`.
7. Chọn thư mục mới vừa giải nén có file `manifest.json`.
8. Mở lại `labs.google` và dùng bình thường.

## Lỗi Thường Gặp

| Vấn đề | Cách xử lý |
|---|---|
| Không thấy extension sau khi cài | Kiểm tra đã chọn đúng thư mục có file `manifest.json` chưa |
| Bấm icon nhưng không mở bảng điều khiển | Tải lại Chrome, hoặc vào `chrome://extensions` tắt rồi bật lại extension |
| Extension báo không chạy trên trang hiện tại | Mở đúng trang `https://labs.google/` |
| Không tìm thấy ô nhập prompt | Chờ trang tải xong, mở đúng màn hình có ô nhập prompt |
| Prompt đã nhập nhưng không bấm được nút tạo | Tăng thời gian chờ lên `30s`, `45s` hoặc `60s` |
| Lượt đầu chạy được, lượt sau lỗi | Trang `labs.google` chưa xử lý xong lượt trước, hãy tăng thời gian chờ |
| AI rewrite báo thiếu API Key | Vào cài đặt và nhập Gemini API Key |
| AI rewrite báo lỗi | Kiểm tra API Key, quota Google AI Studio và kết nối mạng |

## Liên Hệ

- Website: [airender.vn](https://airender.vn)
- Zalo: `0896009111`
- Tác giả: `Phạm Ngọc Tú`
- Credit: [airender.vn](https://airender.vn) #airender
